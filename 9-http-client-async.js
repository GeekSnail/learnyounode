const http = require("http");
const concat = require("concat-stream");
/**
 * 这一次，将有三个 URL 作为前三个命令行参数提供给你
 * 这次你不需要打印出这些内容的长度，仅仅是内容本身即可（字
   符串形式）；每个 URL 对应的内容为一行。重点是你必须按照这些 URL
   在参数列表中的顺序将相应的内容排列打印出来
 */

if (process.argv.length > 2) {
  let buffer = "";
  const urls = process.argv.slice(2);
  let j = 0;
  // const obj = {};
  // urls.forEach(url => (obj[url] = ""));
  // for (let url of urls) {
  //   http
  //     .get(url, res => {
  //       res.setEncoding("utf8");
  //       res.on("error", console.error);
  //       res.on("data", data => (obj[url] += data));
  //       res.on("end", () => {
  //         ++j;
  //         if (j == 3) {
  //           console.log(Object.values(obj).join("\n"));
  //         }
  //       });
  //     })
  //     .on("error", console.error);
  // }
  const result = [];
  const get = i => {
    http
      .get(urls[i], res => {
        res.setEncoding("utf8");
        const write = concat(data => {
          result[i] = data;
          if (++j == 3) {
            console.log(Object.values(result).join("\n"));
          }
        });
        res.pipe(write);
      })
      .on("error", console.error);
  };
  urls.forEach((url, i) => get(i));
}
