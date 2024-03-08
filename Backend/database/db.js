const mongoose = require("mongoose");

module.exports = async () => {
  try {
    // const connection = await mongoose.connect('mongodb://127.0.0.1:27017/File_Dealing');
    const connection = await mongoose.connect(process.env.DBSA);
    if (connection) {
      console.log("Connected to the database successfully");
    } else {
      console.log("Not connected to the database");
    }
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};
