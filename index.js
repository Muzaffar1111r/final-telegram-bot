import "./src/bot/bot.js"
import dotevn from "dotenv"
import mongoose from "mongoose";

dotevn.config();

async function connectDb() {
    await mongoose
      .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Db is connected...");
  })
  .catch(() => {
    console.log("Eror: Db is not connected");

  })

}

connectDb()

console.log("Dastur ishga tushmoqda...");


