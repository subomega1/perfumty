import express from "express";
import protectRouteClient from "../middlewares/protectRouteClient.middleware.js";
import {
  createOrder,
  getClientOrders,
  getClientOrderById
} from "../controllers/order.controller.js"; 

const orderRouter = express.Router();

// Créer une commande
orderRouter.post("/orders", protectRouteClient, createOrder);

// Obtenir toutes les commandes du client
orderRouter.get("/orders", protectRouteClient, getClientOrders);

// Obtenir une commande spécifique
orderRouter.get("/orders/:id", protectRouteClient, getClientOrderById);

export default orderRouter;
