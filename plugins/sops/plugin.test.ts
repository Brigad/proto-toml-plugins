import {run} from "../../testkit.js";

run({
  name: "sops",
  afterInstall: async ($) => {
    await $`sops --version`;
  },
});
