import {run} from "../../testkit.js";

run({
  name: "rover",
  afterInstall: async ($) => {
    await $`rover --version`;
  },
});
