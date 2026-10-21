const { default: mongoose } = require("mongoose");

function connectToDb() {
  const DBURI =
   "mongodb+srv://user1:uN14d32XE3rIavVz@cluster0.ghbjfij.mongodb.net/"
  mongoose
    .connect(DBURI, { dbName: "chatapp" })
    .then(() => console.log("connected to db "))
    .catch(e=>console.error(e.message))
}


module.exports=connectToDb