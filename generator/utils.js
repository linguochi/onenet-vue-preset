const fs = require('fs');
const path = require('path');

module.exports = api => {
  return {
    deleteFile(path) {
      const file = api.resolve(path);
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    },
    deleteDir(dirPath) {
      const dir = api.resolve(dirPath);
      let files = fs.readdirSync(dir);
      for (var i = 0; i < files.length; i++) {
        let newPath = path.join(dir, files[i]);
        let stat = fs.statSync(newPath);
        if (stat.isDirectory()) {
          //如果是文件夹就递归下去
          this.deleteDir(newPath);
        } else {
          //删除文件
          fs.unlinkSync(newPath);
        }
      }
      fs.rmdirSync(dir); //如果文件夹是空的，就将自己删除掉
    },
    getMain() {
      const tsPath = api.resolve('src/main.ts');
      return fs.existsSync(tsPath) ? 'src/main.ts' : 'src/main.js';
    },
    updateBabelConfig(callback) {
      let config, configPath;

      const rcPath = api.resolve('./babel.config.js');
      const pkgPath = api.resolve('./package.json');
      if (fs.existsSync(rcPath)) {
        configPath = rcPath;
        config = callback(require(rcPath));
      } else if (fs.existsSync(pkgPath)) {
        configPath = pkgPath;
        config = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf8' }));
        config.babel = callback(config.babel || {});
      }

      if (configPath) {
        const moduleExports = configPath !== pkgPath ? 'module.exports = ' : '';
        fs.writeFileSync(
          configPath,
          `${moduleExports}${JSON.stringify(config, null, 2)}`,
          { encoding: 'utf8' }
        );
      }
    },
    successTip() {
      console.log('hello , 项目已成功安装，开始愉快编程吧');
    }
  };
};
