const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cannabis_product_listingDB').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
});

module.exports = mongoose;