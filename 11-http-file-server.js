const http = require("http");
const fs = require("fs");
/**
 * 第三个参数 文件目录
 */
const server = http.createServer((req, res) => {
  res.writeHead(200);
  //res.writeHead(200, { 'content-type': 'text/plain' })
  const read = fs.createReadStream(process.argv[3] + req.url);
  read.pipe(res);
});
server.listen(Number(process.argv[2]));
