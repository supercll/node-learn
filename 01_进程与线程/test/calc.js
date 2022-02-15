
      // 求和
      let sum = 0;
      console.log("计算中");
      for (let i = 0; i < 100000000; i++) {
        sum += i;
      }
      console.log("计算结束");
      console.log(sum);
      process.send({sum});