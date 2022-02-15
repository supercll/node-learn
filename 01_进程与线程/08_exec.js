const { exec } = require("child_process");
const path = require("path");

let childProcess = exec("node ./test/sub_process.js", function (err, stdout, stdin) {
  console.log(err);
  console.log(stdout);
  console.log(stdin);
});
