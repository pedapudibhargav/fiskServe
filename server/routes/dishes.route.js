import express from "express";
import { getDishes, createDish, getMasterDishes } from "../controllers/dishes.controller.js";


const router = express.Router();

router.get('/', getDishes);
router.post('/', createDish);



router.get('/master',getMasterDishes);
export default router;