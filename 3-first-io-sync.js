const fs = require("fs");
/**
 *  在 fs 中，所有的同步（或者阻塞）的操作文件系统的方法名都会以 'Sync'
    结尾。要读取一个文件，你将需要使用  fs.readFileSync('/path/to/file')
    方法。这个方法会返回一个包含文件完整内容的 Buffer 对象。

    Buffer data -> string
    (1)你可以传入 'utf8'
    作为它的第二个参数，然后把回调函数作为第三个参数，这样，你得到的将会是一个
    字符串，而不是 Buffer。
    (2) Buffer toString() 方法
 */
if (process.argv.length > 2) {
  const filepath = process.argv[2];
  const data = fs.readFileSync(filepath);
  if (data) {
    console.log(data.toString().split("\n").length - 1);
  }
}
