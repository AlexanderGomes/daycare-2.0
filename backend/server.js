require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

const db = require("./utils/db");

// routes
const authRoute = require("./routes/auth");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/auth", authRoute);


app.listen(port, async () => {
  await db();
  console.log(`server on port ${port}`);
});
