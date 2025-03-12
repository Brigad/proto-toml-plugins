import {run} from "../../testkit.js";

run({
  name: "depot",
  afterInstall: async ($) => {
    await $`depot --version`;
  },
});
