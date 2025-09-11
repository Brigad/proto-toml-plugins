import {run} from "../../testkit.js";

run({
  name: "packer",
  afterInstall: async ($) => {
    await $`packer version`;
  },
});
