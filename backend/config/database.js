const mongoose = require("mongoose");
var promise = mongoose.connect("mongodb://localhost:27017/db_finance", {
  useMongoClient: true,
});
module.exports = mongoose;
