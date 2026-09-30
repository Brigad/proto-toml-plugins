import {run} from "../../testkit.js";

run({
  name: "kwokctl",
  afterInstall: async ($) => {
    await $`kwokctl --version`;
  },
});
