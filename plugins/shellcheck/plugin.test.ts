import {run} from "../../testkit.js";

run({
  name: "shellcheck",
  afterInstall: async ($) => {
    await $`shellcheck --version`;
  },
});
