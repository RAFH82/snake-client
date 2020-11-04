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
      case "1":
        key = conn.write("Say: LOL");
        break;
      case "2":
        key = conn.write("Say: Sss");
        break;
      case "3":
        key = conn.write("Say: Eat");
        break;
      case "4":
        key = conn.write("Say: Hi!");
        break;
      case "5":
        key = conn.write("Say: Bye");
        break;
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
