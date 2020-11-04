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
    switch (key) {
      case "w":
        key = conn.write("Move: up");
        break;
      case "a":
        key = conn.write("Move: left");
        break;
      case "s":
        key = conn.write("Move: down");
        break;
      case "d":
        key = conn.write("Move: right");
        break;
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
