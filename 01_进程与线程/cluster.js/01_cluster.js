let { fork } = require("child_process");
let len = require("os").cpus().length;

const http = require("http");
// 创建服务
let server = http
  .createServer((req, res) => {
    res.end(process.pid + ":process");
  })
  .listen(3000, function () {
    console.log("服务启动, http://localhost:3000");
  });
for (let i = 0; i < len; i++) {
  let child = fork("server.js");
  child.send("server", server); // 让子进程监听同一个服务
}
