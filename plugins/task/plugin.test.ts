import {run} from "../../testkit.js";

run({
  name: "task",
  afterInstall: async ($) => {
    await $`task --version`;
  },
});
