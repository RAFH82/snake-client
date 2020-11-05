const { MOVES } = require("./constants");
// stores the tcp connection object
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = key => {
    if (key === "\u0003") {
      process.exit();
    }
    if (MOVES[key]) {
      conn.write(MOVES[key]);
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
