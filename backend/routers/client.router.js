import express from "express";
import protectRouteClient from "../middlewares/protectRouteClient.middleware.js";
import {
  createClientPerfume,
  getClientPerfumes,
  getClientPerfumeById,
  deleteClientPerfume,
  modifyClientPerfume,
} from "../controllers/client.controller.js"; 

const clientRouter = express.Router();

// Get all perfumes of the client
clientRouter.get("/client", protectRouteClient, getClientPerfumes);

// Get one specific perfume
clientRouter.get("/client/:id", protectRouteClient, getClientPerfumeById);

// Create a new perfume
clientRouter.post("/client", protectRouteClient, createClientPerfume);

// Modify a perfume
clientRouter.put("/client/:id", protectRouteClient, modifyClientPerfume);

// Delete a perfume
clientRouter.delete("/client/:id", protectRouteClient, deleteClientPerfume);

export default clientRouter;
