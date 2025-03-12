import {run} from "../../testkit.js";

run({
  name: "kubens",
  afterInstall: async ($) => {
    await $`kubens --version`;
  },
});
