import {run} from "../../testkit.js";

run({
  name: "bats",
  afterInstall: async ($) => {
    await $`bats --version`;
  },
});
