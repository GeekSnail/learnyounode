const net = require("net");
/**
 * 编写一个 TCP 时间服务器
  你的服务器应当监听一个端口，以获取一些 TCP
  连接，这个端口会经由第一个命令行参数传递给你的程序。针对每一个 TCP
  连接，你都必须写入当前的日期和24小时制的时间，如下格式：
     "YYYY-MM-DD hh:mm"
  然后紧接着是一个换行符。
  月份、日、小时和分钟必须用零填充成为固定的两位数：
     "2013-07-06 17:42"

 * socket 对象包含了很多关于各个连接的信息（meta-data），但是它也同时是一个 Node 双工流（duplex Stream），所以，它既可以读，也可以写。对这个练习来说，我们只需要对 socket 写数据和关闭它就可以了。
 * 
 * 使用  socket.write(data) 可以写数据到 socket 中，用  socket.end()
  可以关闭一个 socket。另外， .end()
  方法也可以接收一个数据对象作为参数，因此，你可简单地使用 socket.end(data)
  来完成写数据和关闭两个操作。
 */
const server = net.createServer(socket => {
  const date = new Date();
  const data =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1 + "").padStart(2, "0") +
    "-" +
    (date.getDate() + "").padStart(2, "0") +
    " " +
    date.getHours() +
    ":" +
    (date.getMinutes() + "").padStart(2, 0);
  socket.write(data);
  socket.end("\n");
});

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }
// function now () {
//   const d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }
// const server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

if (process.argv.length > 2) {
  server.listen(Number(process.argv[2]));
}
