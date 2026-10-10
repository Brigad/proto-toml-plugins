import {run} from "../../testkit.js";

run({
  name: "helm-unittest",
  afterInstall: async ($) => {
    await $`helm-unittest --help`;
  },
});
