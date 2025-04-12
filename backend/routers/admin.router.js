import express from "express";
import { createAdminPerfume, deleteAdminPerfume, handlePerfumeOrder } from "../controllers/admin.controller.js"; 
import protectRouteAdmin from "../middlewares/protectRouteAdmin.middleware.js"; 

const router = express.Router();

// Create a new perfume (Admin only)
router.post("/admin/perfume", protectRouteAdmin, createAdminPerfume);

// Delete a perfume (Admin only)
router.delete("/admin/perfume/:id", protectRouteAdmin, deleteAdminPerfume);

// Accept or reject a client's perfume order (Admin only)
router.put("/admin/perfume/order", protectRouteAdmin, handlePerfumeOrder);

export default router;
