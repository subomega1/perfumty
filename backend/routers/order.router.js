import express from "express";
import protectRouteClient from "../middlewares/protectRouteClient.middleware.js";
import {
  createOrder,
  getClientOrders,
  getClientOrderById
} from "../controllers/order.controller.js"; 

const router = express.Router();

// Créer une commande
router.post("/orders", protectRouteClient, createOrder);

// Obtenir toutes les commandes du client
router.get("/orders", protectRouteClient, getClientOrders);

// Obtenir une commande spécifique
router.get("/orders/:id", protectRouteClient, getClientOrderById);

export default router;
