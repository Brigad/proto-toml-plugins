import {run} from "../../testkit.js";

run({
  name: "terragrunt",
  afterInstall: async ($) => {
    await $`terragrunt version`;
  },
});
