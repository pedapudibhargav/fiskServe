// Controller
import DishModel from "../models/dish.model.js";
export const getDishes = async (req, res) => {
    try {
        const dishes = await DishModel.find();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createDish = async (req, res) => {
    const dish = req.body
    // console.log(JSON.stringify(dish));
    const newDish = new DishModel(dish);
    console.log({newDish});
    try {
        await newDish.save();
        res.status(201).json(dish);
    } catch (error) {
        res.status(409).json({message: error.message});
    }    
}