const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const loanRoute = require("./routes/loan");
const path = require("path");
const PORT=process.env.PORT ||5000;

dotenv.config();
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/loans", loanRoute);
app.listen(PORT, () => {
  console.log("Backend is running.");
});