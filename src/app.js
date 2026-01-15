const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

console.log('Process', process.env)


app.use(morgan("dev")); //  su dung cho Dev
// app.use(morgan("combined")); //su dung cho production
// morgan("common"); // giống với combined nhưng  ko có resource (postman)
// app.use(morgan("short")); // trả vè thời gian phản hồi và method
// app.use(morgan("tiny")); // tra ve method va thoi gian phan hoi

app.use(helmet());
app.use(compression());

//init db
// require('../src/dbs/init.mongodb.lv0')
require("../src/dbs/init.mongodb");
const { checkOverLoad } = require("../src/helpers/check.connect");
checkOverLoad();
app.get("/", (req, res, next) => {
  // const Reply = "Hello Nguyen Hoai An";
  return res.status(200).json({
    message: "Welcome my project ",
    // metadata: Reply.repeat(1000000),
  });
});

module.exports = app;
