const http = require("http");
http
  .createServer((req, res) => {
    if (req.url === "/sum") {
      // 求和
      let sum = 0;
      for (let i = 0; i < 10000000000; i++) {
        sum += i;
      }
      res.end(sum + "");
    } else {
      res.end("end");
    }
  })
  .listen(3000, () => {
    console.log("http://127.0.0.1:3000");
  });
