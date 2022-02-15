let { fork } = require("child_process");
let path = require("path");
// 通过node命令执行sub_process.js文件
let childProcess = fork("sub_process.js", {
  cwd: path.resolve(__dirname, "test"),
});
childProcess.on("message", function (data) {
  console.log(data);
});
