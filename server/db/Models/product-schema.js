const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category: {
        type: String,
        required: true,
        enum: ["Flower", "Edibles", "Oils"]   // restrict values
      },
    
      thcPercentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100
      },
    
      cbdPercentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100
      },
    image:{
        type:String,
        required:true,
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;