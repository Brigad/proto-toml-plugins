import {run} from "../../testkit.js";

run({
  name: "helm",
  afterInstall: async ($) => {
    await $`helm version`;
  },
});
