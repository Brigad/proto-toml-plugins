import {run} from "../../testkit.js";

run({
  name: "kcl-language-server",
  afterInstall: async ($) => {
    await $`kcl-language-server --version`;
  },
});
