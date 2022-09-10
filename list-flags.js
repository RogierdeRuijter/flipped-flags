const fs = require("fs");
const util = require("util");

const directory = "assets";

console.log(util.inspect(fs.readdirSync(directory), { maxArrayLength: null }));
