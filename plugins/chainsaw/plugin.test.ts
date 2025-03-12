import {run} from "../../testkit.js";

run({
  name: "chainsaw",
  afterInstall: async ($) => {
    await $`chainsaw version`;
  },
});
