function fork(filename, options) {
  let stdio = ["inherit", "inherit", "inherit"];
  if (options.silent) {
    // 如果是ignore  就忽略子进程的输入和输出
    stdio = ["ignore", "ignore", "ignore"];
  }
  stdio.push("ipc"); // 默认支持ipc的方式
  options.stdio = stdio;
  return spawn("node", [filename], options);
}


