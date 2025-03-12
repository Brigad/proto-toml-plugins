import {run} from "../../testkit.js";

run({
  name: "opa",
  afterInstall: async ($) => {
    await $`opa version`;
  },
});
