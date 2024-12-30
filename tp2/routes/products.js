const express = require('express');
const validateProductData = require('../middleware/validateProductData');

const router = express.Router();
let products = [];

// Route POST /add-product
router.post('/add-product', validateProductData, (req, res) => {
    const { name, price } = req.body;
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);

    res.status(201).json({
        message: 'Produit ajouté avec succès',
        product: newProduct,
    });
});

module.exports = router;
