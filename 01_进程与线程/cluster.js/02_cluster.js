let cluster = require("cluster");
let http = require("http");
let cpus = require("os").cpus().length;
const workers = {};
if (cluster.isMaster) {
  cluster.on("exit", function (worker) {
    console.log(worker.process.pid, "death");
    let w = cluster.fork();
    workers[w.pid] = w;
  });
  for (let i = 0; i < cpus; i++) {
    let worker = cluster.fork();
    workers[worker.pid] = worker;
  }
} else {
  http
    .createServer((req, res) => {
      res.end(process.pid + "", "pid");
    })
    .listen(3000);
  console.log("server start", process.pid);
}
