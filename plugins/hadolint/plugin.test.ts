import {run} from "../../testkit.js";

run({
  name: "hadolint",
  afterInstall: async ($) => {
    await $`hadolint --version`;
  },
});
