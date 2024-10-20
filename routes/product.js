const express = require('express');
const productController = require('../controller/product');

const router = express.Router();

router
  .post('/', productController.createProduct)
  .get('/ssr', productController.getAllProductsServerSideRender)
  .get('/add', productController.functionadding)

  .get('/', productController.getAllProducts)
  .get('/:id', productController.getProduct)
  .put('/:id', productController.replaceProduct)
  .patch('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct)
  .get('/ssr', productController.getAllProductsServerSideRender)

exports.router = router;  