"use strict";
const fs = require("fs");
const path = require("path");

module.exports = (dir, filterStr, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);
    const filtered = files.filter(f => "." + filterStr == path.extname(f));
    callback(null, filtered);
  });
};
