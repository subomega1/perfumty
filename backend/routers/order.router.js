import express from "express";
import protectRouteClient from "../middlewares/protectRouteClient.middleware.js";
import {
  createOrder,
  getClientOrders,
  getClientOrderById,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

// Créer une commande
orderRouter.post("/order", protectRouteClient, createOrder);

// Obtenir toutes les commandes du client
orderRouter.get("/order", protectRouteClient, getClientOrders);

// Obtenir une commande spécifique
orderRouter.get("/order/:id", protectRouteClient, getClientOrderById);

export default orderRouter;
