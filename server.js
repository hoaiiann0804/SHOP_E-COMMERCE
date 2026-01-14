const app = require("./src/app");

const PORT = 8888;
const server = app.listen(PORT, () => {
  console.log("Welcome to my project");
});

process.on("SIGINT", () => {
  server.close(() => console.log("Exit Sever"));
});

// NETWORK NODEJS
