import express from "express";
import { getMenu, createMenu, updateMenu } from "../controllers/menu.controller.js"
const menuRouter = express.Router();

menuRouter.get('/', getMenu)
menuRouter.post('/', createMenu)
menuRouter.put('/', updateMenu)

export default menuRouter;