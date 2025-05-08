const express = require("express");
const app = express();
const cors = require("cors");
//config env
require("dotenv").config();

const userRoute = require("./routes/userRoutes");
const postRoute = require("./routes/postRoutes");

//parse json data
app.use(express.json());
//cors
app.use(cors());
//parse urlencoded data
app.use(express.urlencoded({ extended: true }));
//static path
app.use("/storage", express.static(path.join(__dirname, "storage")));

//routing main route
app.use("/users", userRoute);
//user/name
app.use("/post", postRoute);
//post/name

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
