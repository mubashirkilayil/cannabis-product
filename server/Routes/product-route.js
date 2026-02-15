const express = require('express');
const Product = require('../db/Models/product-schema');

const router = express.Router();
router.get('/',async(req,res)=>{
    try{
        const {search,category} = req.query;
        let query = {};
        if(search){
            query.name = { $regex: search, $options: 'i' };
        }
        if(category){
            query.category = category;
        }
        const fullProducts = await Product.find(query);
        return res.status(200).json({message:"Products fetched successfully",data:fullProducts});
    }catch(e){
        return res.status(500).json({message:e.message});
    }
        
})
router.post('/',async(req,res)=>{
    try{
       const newProduct = await  Product.create(req.body);
       return res.status(201).json({message:"Product added successfully",data:newProduct});
    }catch(e){
        return res.status(500).json({message:e.message});
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const productById = await Product.findById(id);
        if(!productById){
            return res.status(404).json({message:"Product not found"});
        }
        return res.status(200).json({message:"Product fetched successfully",data:productById});
    }catch(e){
        return res.status(500).json({message:e.message});
    }
});
router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const editedProduct = await Product.findByIdAndUpdate(id, body, {
        new: true,
      });
      if (!editedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      return res.status(200).json({
        success: true,
        data: editedProduct,
        message: 'Product updated successfully',
      });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  });
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedData = await Product.findByIdAndDelete(id);
      if (!deletedData) {
        return res.status(404).json({ message: 'Product not found' });
      }
      return res
        .status(200)
        .json({ success: true, message: 'Product deleted successfully' });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  });

module.exports = router;