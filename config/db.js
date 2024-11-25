const mongoose = require("mongoose");

const dbURI = process.env.MONGO_URI || "mongodb://localhost:27017/mydb";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
