const server = require("./config/server");
const connectDB = require("./config/database");
require("./config/routes")(server);

connectDB();
