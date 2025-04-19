import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import router from "./routers/auth.router.js";
import clientRouter from "./routers/client.router.js";
import orderRouter from "./routers/order.router.js";
import cors from "cors";
const PORT_SERVER = process.env.PORT || 5000;
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // allow requests from your frontend
    credentials: true, // allow set cookies from frontend
  })
);
app.use("/api/v1/auth", router);
app.use("/api/v1", clientRouter);
app.use("/api/v1", orderRouter);

app.listen(PORT_SERVER, () => {
  connectToMongoDB();
  console.log(`Server started on port ${PORT_SERVER}`);
});
