import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createOrder, getOrders } from "../controller/order.controller";

const router = express.Router();

// Routes for order management
router.route("/").get(isAuthenticated, getOrders);
router.route("/create-order").post(isAuthenticated, createOrder);

export default router;
