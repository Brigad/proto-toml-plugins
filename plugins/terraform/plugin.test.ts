import {run} from "../../testkit.js";

run({
  name: "terraform",
  afterInstall: async ($) => {
    await $`terraform version`;
  },
});
