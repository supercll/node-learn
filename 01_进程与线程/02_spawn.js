let { spawn } = require("child_process");
let path = require("path");
// 通过node命令执行sub_process.js文件
let childProcess = spawn("node", ["sub_process.js"], {
  cwd: path.resolve(__dirname, "test"),
  stdio: ["pipe"], // 通过流的方式
});
// 子进程读取写入的数据
childProcess.stdout.on("data", function (data) {
  console.log(data);
});
// 子进程像标准输出中写入
process.stdout.write("hello");
