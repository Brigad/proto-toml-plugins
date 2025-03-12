import {run} from "../../testkit.js";

run({
  name: "cilium",
  afterInstall: async ($) => {
    await $`cilium version`;
  },
});
