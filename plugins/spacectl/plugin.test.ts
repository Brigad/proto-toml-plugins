import {run} from "../../testkit.js";

run({
  name: "spacectl",
  afterInstall: async ($) => {
    await $`spacectl version`;
  },
});
