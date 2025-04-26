const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 4000;

// middleware...........
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const router = require("./routes/perfumeRoutes");
app.use("/api/v1", router);

//database connection..........
const connectDB = require("./database/mongodb");
connectDB();

//cloudinary connection.......................
const cloudinaryConfig = require("./database/cloudinary");
cloudinaryConfig();

app.get("/", (req, res) => {
  res.send("Welcome to AROmatte Luxe!");
});

app.listen(port, () => {
  console.log("server is connected successfully");
});
