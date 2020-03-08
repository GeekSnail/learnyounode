const http = require("http");
// const URL = require("url");
const qs = require("querystring");
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
     
  https://github.com/workshopper/learnyounode/blob/master/exercises/http_json_api_server/solution/solution.js
 */
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  // const url = URL.parse(req.url);
  const url = new URL(req.url, "http://localhost:" + process.argv[2]);
  if (url.pathname.startsWith("/api/")) {
    // const params = qs.parse(url.query);
    const params = url.searchParams;
    let date;
    // if (params.iso) date = new Date(params.iso);
    if (params.get("iso")) date = new Date(params.get("iso"));
    if (date) {
      let body = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };
      switch (url.pathname) {
        case "/api/parsetime":
          res.end(JSON.stringify(body));
          break;
        case "/api/unixtime":
          res.end(JSON.stringify({ unixtime: date.getTime() }));
          break;
        default:
      }
    }
  }
});

server.listen(Number(process.argv[2]));
