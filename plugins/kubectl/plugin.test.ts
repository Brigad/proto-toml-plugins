import {run} from "../../testkit.js";

run({
  name: "kubectl",
  afterInstall: async ($) => {
    await $`kubectl version --client`;
  },
});
