import MenuModel from "../models/menu.model.js";
import DishModel from "../models/dish.model.js";

export const getMenu = async (req, res) => {
    try {
        const menus = await MenuModel.find();
        res.status(200).json(menus);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createMenu = async (req, res) => {
    const dish = req.body;
    const date = new Date(req.params);
    try {
        await DishModel.find({dish: dish}).then(dishes => {
            const dishId = dishes[0]._id;
        })
        const newMenu = new MenuModel([dishId], date);
        await newMenu.save();
        res.status(201).json();
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updateMenu = async(req, res) => {
    const dish = req.body;
    const date = new Date(req.params);
    
    try {
        const dishFound = isAlreadyInMenu(dish, date);
        if (dishFound){
            res.status(404).json({message: 'The dish is already in the menu for the day.'})
        }else{
            await DishModel.find({dish: dish}).then(dishes => {
                const dishId = dishes[0]._id;
            })
            const menu = await MenuModel.findOneAndUpdate(
                {date: date},
                {$push : {dish: dishId}}
            )
            const updatedMenu = await MenuModel.find();
            res.status(201).json(updatedMenu);
        }
    } catch (error){
        res.status(404).json({message: error.message})
    }
}



//Checking if the dish is already in the menu for the specific date
const isAlreadyInMenu = async (dish, date) => {
    const found = await MenuModel.findOne({dish: dish, date: date})
    if(found) {
        return true;
    }else {
        return false;
    }
}