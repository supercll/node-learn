let { spawn } = require("child_process");
let path = require("path");
// 通过node命令执行sub_process.js文件
let child = spawn("node", ["sub_process.js"], {
  cwd: path.resolve(__dirname, "test"),
  stdio: "ignore",
  detached: true, // 独立的线程
});
child.unref(); // 放弃控制
