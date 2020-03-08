const http = require("http");
/**
 * response 对象是一个 Node 的 Stream 类型的对象，你可以将 Node Stream
  当做一个会触发一些事件的对象，其中我们通常所需要关心的事件有三个：
  "data"，"error" 以及 "end"。你可以像这样来监听一个事件：
     
  response.on('data', function (data) {  })

  'data' 事件会在每个数据块到达并已经可以对其进行一些处理的时候被触发。数据块的大小
  将取决于数据源。

  http.get() 所获得的 response 对象/Stream 还有一个 setEncoding()
  的方法。如果你调用这个方法，并为其指定参数为 utf8，那么 data
  事件中会传递字符串，而不是标准的 Node Buffer 对象，这样，你也不用再手动将
  Buffer 对象转换成字符串了。
 */
if (process.argv.length > 2) {
  http
    .get(process.argv[2], res => {
      res.setEncoding("utf8");
      res.on("error", console.error);
      res.on("data", console.log);
      // res.on("end", () => {
      //   console.log("end");
      // });
    })
    .on("error", console.error);
}
