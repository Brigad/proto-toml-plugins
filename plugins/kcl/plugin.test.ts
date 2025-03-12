import {run} from "../../testkit.js";

run({
  name: "kcl",
  afterInstall: async ($) => {
    await $`kcl version`;
  },
});
