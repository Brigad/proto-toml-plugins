import {run} from "../../testkit.js";

run({
  name: "atmos",
  afterInstall: async ($) => {
    await $`atmos version`;
  },
});
