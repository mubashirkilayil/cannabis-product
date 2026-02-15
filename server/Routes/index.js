const express = require('express');
const userRoutes = require('./user-route');
const productRoutes = require('./product-route');
const imgUploadRoute = require('./image-route');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/upload', imgUploadRoute);

module.exports = router;