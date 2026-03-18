const assert = require("assert");
const { greet } = require("./hello");
assert(greet("world").includes("Hello"));
console.log("Integration tests pass");
