import {run} from "../../testkit.js";

run({
  name: "chamber",
  afterInstall: async ($) => {
    await $`chamber version`;
  },
});
