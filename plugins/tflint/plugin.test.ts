import {run} from "../../testkit.js";

run({
  name: "tflint",
  afterInstall: async ($) => {
    await $`tflint --version`;
  },
});
