import {run} from "../../testkit.js";

run({
  name: "terraform-docs",
  afterInstall: async ($) => {
    await $`terraform-docs version`;
  },
});
