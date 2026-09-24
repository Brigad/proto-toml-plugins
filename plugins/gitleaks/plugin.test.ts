import {run} from "../../testkit.js";

run({
  name: "gitleaks",
  afterInstall: async ($) => {
    await $`gitleaks version`;
  },
});
