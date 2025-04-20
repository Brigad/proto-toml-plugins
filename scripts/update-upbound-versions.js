#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
    try {
        // Fetch versions from S3
        const response = await fetch(
            "https://s3-us-west-2.amazonaws.com/public-cli.releases?delimiter=/&prefix=stable/"
        );
        const text = await response.text();

        // Extract versions using regex
        const versions = [...text.matchAll(/stable\/v(\d+\.\d+\.\d+)\//g)]
            .map((match) => match[1])
            .sort((a, b) => {
                const [a1, a2, a3] = a.split(".").map(Number);
                const [b1, b2, b3] = b.split(".").map(Number);
                return a1 - b1 || a2 - b2 || a3 - b3;
            });

        // Update plugin.toml
        const pluginPath = path.join(__dirname, "../plugins/upbound/plugin.toml");
        const content = fs.readFileSync(pluginPath, "utf8");
        const updatedContent = content.replace(
            /versions = \[.*?\]/s,
            `versions = ${JSON.stringify(versions)}`
        );
        fs.writeFileSync(pluginPath, updatedContent);

        console.log(`Updated versions: ${versions.join(", ")}`);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

main();
