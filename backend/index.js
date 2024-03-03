import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB();
	console.log(`Server Running on port ${PORT}`);
});
