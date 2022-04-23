import mongoose from 'mongoose';

const dishSchema = mongoose.Schema({
    title: String,
    ingredients: [String],
    nutrition:[Object],
    allergenInformation:[Object],
    totalLikes: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: new Date()
    }
});

const DishModel= mongoose.model('DishModel',dishSchema);
export default DishModel;