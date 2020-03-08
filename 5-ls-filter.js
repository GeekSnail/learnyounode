const fs = require("fs");
const path = require("path");
/**
 *  fs.readdir 读取目录下的文件名
 *  path.extname 获取文件名的扩展名
 */
if (process.argv.length > 3) {
  const dir = process.argv[2];
  const ext = "." + process.argv[3];
  fs.readdir(dir, (err, files) => {
    if (err) throw new Error(err);
    const filtered = files.filter(f => ext == path.extname(f));
    console.log(filtered.join("\n"));
  });
}
