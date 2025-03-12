import {run} from "../../testkit.js";

run({
  name: "kubectx",
  afterInstall: async ($) => {
    await $`kubectx --version`;
  },
});
