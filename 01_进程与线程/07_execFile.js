const { execFile } = require("child_process");

let childProcess = execFile("node", ["./test/sub_process"], function (err, stdout, stdin) {
  console.log(stdout);
});
