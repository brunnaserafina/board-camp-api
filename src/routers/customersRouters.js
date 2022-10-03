import express from "express";
import {
  getCustomers,
  getCustomer,
  createCustomer,
} from "../controllers/customersControllers.js";
import { validateCreateCustomer } from "../middlewares/customersMiddeware.js";

const router = express.Router();

router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);
router.post("/customers", validateCreateCustomer, createCustomer);

export default router;
