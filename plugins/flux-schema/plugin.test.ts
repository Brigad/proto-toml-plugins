import {run} from "../../testkit.js";

run({
  name: "flux-schema",
  afterInstall: async ($) => {
    await $`flux-schema version`;
  },
});
