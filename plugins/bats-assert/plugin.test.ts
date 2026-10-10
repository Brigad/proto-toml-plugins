import {run} from "../../testkit.js";

// The library has no executable: proto prints the path of its load.bash.
run({
  name: "bats-assert",
  afterInstall: async ($) => {
    const path = (await $`proto --reporter text bin bats-assert`).stdout.trim();
    await $`test -f ${path}`;
  },
});
