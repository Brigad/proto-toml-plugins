import {run} from "../../testkit.js";

run({
  name: "terragrunt-atlantis-config",
  afterInstall: async ($) => {
    await $`terragrunt-atlantis-config version`;
  },
});
