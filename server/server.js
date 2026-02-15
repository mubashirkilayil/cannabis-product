const express =require("express");
const cors =require("cors");
const routes = require('./Routes');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('Public'));

app.use('/api',routes);

app.listen(3000,()=>{
    console.log("Cannabis Product Listing server is running @http://localhost:3000");
    
})