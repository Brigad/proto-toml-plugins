import {run} from "../../testkit.js";

run({
  name: "shfmt",
  afterInstall: async ($) => {
    await $`shfmt --version`;
  },
});
