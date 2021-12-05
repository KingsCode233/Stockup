const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

const app = express();
const router = express.Router();

//Body parser
app.use(express.json());

//Parse cookie
app.use(cookieParser());

//Route files
const auth = require("./routes/auth");

//Mount routers
app.use("/api/v1/auth", auth);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server and exit process
  server.close(() => process.exit(1));
});
