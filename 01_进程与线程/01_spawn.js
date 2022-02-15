let { spawn } = require("child_process");
let path = require("path");
// 通过node命令执行sub_process.js文件
let childProcess = spawn("node", ["sub_process.js"], {
  cwd: path.resolve(__dirname, "test"), // 找文件的目录是test目录下
  stdio: [0, 1, 2],
});
// 监控错误
childProcess.on("error", function (err) {
  console.log(err);
});
// 监听关闭事件
childProcess.on("close", function () {
  console.log("close");
});
// 监听退出事件
childProcess.on("exit", function () {
  console.log("exit");
});
