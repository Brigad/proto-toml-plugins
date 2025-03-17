import {run} from "../../testkit.js";

run({
  name: "nomad",
  afterInstall: async ($) => {
    await $`nomad version`;
  },
});
