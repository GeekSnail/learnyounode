/**
 *  编写一个简单的程序，使其能接收一个或者多个命令行参数，并且在终端（标准输出
    stdout）中打印出这些参数的总和。
    $ node program.js 1 2 3
    ['node', '/path/to/your/program.js', '1', '2', '3']
 */

// console.log(process.argv);
const argv = process.argv.slice(2);
console.log(argv.reduce((res, cur, i) => res + Number(cur), 0));
