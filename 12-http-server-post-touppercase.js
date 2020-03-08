const http = require("http");
const map = require("through2-map");
/**
 * 编写一个 HTTP 服务器，它只接受 POST 形式的请求，并且将 POST
  请求主体（body）所带的字符转换成大写形式，然后返回给客户端。
  through2-map 允许你创建一个 transform
  stream，它仅需要一个函数就能完成「接收一个数据块，处理完后返回这个数据块」
  的功能 ，它的工作模式类似于 Array#map()，但是是针对 stream 的：
     const map = require('through2-map')
     inStream.pipe(map(function (chunk) {
       return chunk.toString().split('').reverse().join('')
     })).pipe(outStream)
 */
const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    res.writeHead(200);
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
  } else {
    return res.end("send me a POST\n");
  }
});
server.listen(Number(process.argv[2]));
