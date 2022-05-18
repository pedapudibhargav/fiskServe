import mongoose from 'mongoose';
import Schema from 'mongoose';
const menuSchema = mongoose.Schema({
    dish: {
        type: [Schema.Types.ObjectID],
        ref: "DishModel",
    }, 
    date: {
        type: Date,
        required: true
    }
});

const MenuModel = mongoose.model('MenuModel', menuSchema);
export default MenuModel;