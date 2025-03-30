import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import router from "./routers/auth.router.js";


const PORT_SERVER =  process.env.PORT || 8000;
const app = express();




dotenv.config();    
app.use(express.json());


app.use("/api/v1/auth", router)

app.listen(PORT_SERVER, () => {

    connectToMongoDB()
    console.log(`Server started on port ${PORT_SERVER}`);
});
app.get("/", (req, res) => {
    res.send("Hello World!");
})