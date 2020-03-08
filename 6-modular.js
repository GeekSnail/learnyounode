const lsFilter = require("./ls-filter");

const dir = process.argv[2];
const ext = process.argv[3];
lsFilter(dir, ext, (err, files) => {
  if (err) throw new Error(err);
  console.log(files.join("\n"));
});
