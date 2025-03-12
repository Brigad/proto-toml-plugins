import {run} from "../../testkit.js";

run({
  name: "kind",
  afterInstall: async ($) => {
    await $`kind version`;
  },
});
