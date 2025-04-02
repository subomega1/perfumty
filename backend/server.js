import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import router from "./routers/auth.router.js";

const PORT_SERVER = process.env.PORT || 5000;
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", router);

app.listen(PORT_SERVER, () => {
  connectToMongoDB();
  console.log(`Server started on port ${PORT_SERVER}`);
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
