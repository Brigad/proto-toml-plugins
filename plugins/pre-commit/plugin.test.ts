import {run} from "../../testkit.js";

run({
  name: "pre-commit",
  afterInstall: async ($) => {
    await $`pre-commit --version`;
  },
});
