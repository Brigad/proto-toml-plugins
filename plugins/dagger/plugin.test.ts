import {run} from "../../testkit.js";

run({
  name: "dagger",
  afterInstall: async ($) => {
    await $`dagger version`;
  },
});
