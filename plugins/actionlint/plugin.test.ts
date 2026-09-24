import {run} from "../../testkit.js";

run({
  name: "actionlint",
  afterInstall: async ($) => {
    await $`actionlint --version`;
  },
});
