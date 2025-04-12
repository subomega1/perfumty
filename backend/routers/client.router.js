import express from "express";
import protectRouteClient from "../middlewares/protectRouteClient.middleware.js";
import {
  createClientPerfume,
  getClientPerfumes,
  getClientPerfumeById,
  deleteClientPerfume,
  modifyClientPerfume,
} from "../controllers/client.controller.js"; 

const router = express.Router();

// Get all perfumes of the client
router.get("/client", protectRouteClient, getClientPerfumes);

// Get one specific perfume
router.get("/client/:id", protectRouteClient, getClientPerfumeById);

// Create a new perfume
router.post("/client", protectRouteClient, createClientPerfume);

// Modify a perfume
router.put("/client/:id", protectRouteClient, modifyClientPerfume);

// Delete a perfume
router.delete("/client/:id", protectRouteClient, deleteClientPerfume);

export default router;