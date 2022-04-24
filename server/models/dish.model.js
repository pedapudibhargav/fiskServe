import mongoose from 'mongoose';

const dishSchema = mongoose.Schema({
    dishName: String,
    ingredients: {
        type: String,
        default: ''
    },
    image:{
        type: String,
        default: ''
    },
    nutrition: {
        type: [Object],
        default: []
    },
    allergenInformation: {
        type: [Object],
        default: []
    },
    totalLikes: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: new Date()
    }
});

const DishModel = mongoose.model('DishModel', dishSchema);
export default DishModel;