import express from "express";
import protectRouteClient from "../middlewares/protectRouteClient.middleware.js";



const router = express.Router();

//get all clients perfume
router.get("/client",protectRouteClient, /*hire the function of the controller*/ );


//create client perfume
router.post("/client",protectRouteClient, /*hire the function of the controller*/ );

//modify client perfume
// don't forget the middleware like the get look up ^
router.put("/client/:id", );

//delete client perfume
router.delete("/client/:id", );