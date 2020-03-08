const http = require("http");
const concat = require("concat-stream");
/**
 * 打印长度和data
 * 你可以把一个 stream pipe 到 bl 或 concat-stream
  中去，它们会为你收集数据。一旦 stream
  传输结束，一个回调函数会被执行，并且，这个回调函数会带上所收集的数据：

     response.pipe(bl(function (err, data) {  }))
     // 或
     response.pipe(concatStream(function (data) {  }))

  要注意的是你可能需要使用 data.toString() 来把 Buffer 转换为字符串。
 */
if (process.argv.length > 2) {
  let buffer = "";
  http
    .get(process.argv[2], res => {
      // res.setEncoding("utf8");
      // res.on("error", console.error);
      // res.on("data", data => (buffer += data));
      // res.on("end", () => {
      //   console.log(buffer.length + "\n" + buffer);
      // });
      const write = concat(data => {
        console.log(data.length + "\n" + data);
      });
      res.pipe(write);
    })
    .on("error", console.error);
}
