const http = require("http");
const { fork } = require("child_process");
const path = require("path");
http
  .createServer((req, res) => {
    if (req.url === "/sum") {
      let childProcess = fork("calc.js", {
        cwd: path.resolve(__dirname, "test"),
      });
      childProcess.on("message", function (data) {
        const { sum } = data;
        res.end(sum + "");
      });
    } else {
      res.end("ok");
    }
  })
  .listen(3000);
