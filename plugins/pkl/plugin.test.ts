import {run} from "../../testkit.js";

run({
  name: "pkl",
  afterInstall: async ($) => {
    await $`pkl --version`;
  },
});
