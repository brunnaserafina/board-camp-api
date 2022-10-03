import express from "express";
import {
  getCustomers,
  getCustomer,
} from "../controllers/customersControllers.js";

const router = express.Router();

router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);

export default router;
