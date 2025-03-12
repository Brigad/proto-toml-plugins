import {run} from "../../testkit.js";

run({
  name: "upbound",
  afterInstall: async ($) => {
    await $`upbound version`;
  },
});
