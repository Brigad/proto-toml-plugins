import {run} from "../../testkit.js";

// The library has no executable: proto prints the path of its load.bash.
run({
  name: "bats-support",
  afterInstall: async ($) => {
    const path = (await $`proto --reporter text bin bats-support`).stdout.trim();
    await $`test -f ${path}`;
  },
});
