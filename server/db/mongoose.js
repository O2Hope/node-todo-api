var mongoose = require("mongoose");

const config = {
    autoIndex: false,
    useNewUrlParser: true,
  };

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp", config);

module.exports = {mongoose}