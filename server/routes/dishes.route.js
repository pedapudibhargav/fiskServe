import express from "express";
import { getDishes, createDish } from "../controllers/dishes.controller.js";

const router = express.Router();

router.get('/', getDishes);
router.post('/', createDish);

export default router;