import {run} from "../../testkit.js";

run({
  name: "crossplane",
  afterInstall: async ($) => {
    await $`crossplane version --client`;
  },
});
