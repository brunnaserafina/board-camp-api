import express from "express";
import {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
} from "../controllers/customersControllers.js";
import { validateCreateCustomer } from "../middlewares/customersMiddeware.js";

const router = express.Router();

router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);
router.post("/customers", validateCreateCustomer, createCustomer);
router.put("/customers/:id", validateCreateCustomer, updateCustomer);

export default router;
