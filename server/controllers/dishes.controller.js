// Controller
import DishModel from "../models/dish.model.js";
import fetch from 'node-fetch';

const RAPID_KEY = process.env.RAPID_API_KEY;

export const getDishes = async (req, res) => {
    try {
        const dishes = await DishModel.find();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createDish = async (req, res) => {
    const dish = req.body
    // console.log(JSON.stringify(dish));
    const newDish = new DishModel(dish);
    console.log({ newDish });
    try {
        await newDish.save();
        res.status(201).json(dish);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

/**
 * Get dishes from external API
 * https://rapidapi.com/apidojo/api/tasty
 */
export const getMasterDishes = async (req, res) => {
    try {
        console.log("received the req 2");
        // const dishes = await DishModel.find();

        const url = 'https://tasty.p.rapidapi.com/recipes/list';
        const options = {
            method: 'GET',
            qs: { from: '0', size: '20', q: 'chicken' },
            headers: {
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
                'X-RapidAPI-Key': RAPID_KEY,
                useQueryString: true
            }
        };

        const results = await fetch(url, options)
            .then(res => res.json());
        res.status(201).json(results);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}