import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected to MongoDB!");
}).catch((err) => {
  console.log("Failed to connect to MongoDB", err);
});


const app = express();

app.listen(process.env.PORT, () => {
  console.log("server live on port 3000!");
});