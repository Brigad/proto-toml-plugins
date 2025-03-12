import {run} from "../../testkit.js";

run({
  name: "helmfile",
  afterInstall: async ($) => {
    await $`helmfile version`;
  },
});
