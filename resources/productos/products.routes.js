const express = require('express')
const uuidv4 = require('uuid/v4');

const validateProduct = require('./products.validate');
let products = require('../../db').products;

const productsRoutes = express.Router()

// READ
productsRoutes.get('/', (req, res) => {
  res.json(products);
  logger.info('Se envió correctamente los productos', `total: ${products.length}`);
});

// CREATE
productsRoutes.post('/', validateProduct, (req, res) => {
  const newProduct = { ...req.body, id: uuidv4() };
  products.push(newProduct);
  res.json(newProduct);
  logger.info('Se guardo correctamente el producto', newProduct.id);
})

// UPDATE
productsRoutes.put('/:id', (req, res) => {
  const filterProduct = products.filter(product => product.id === req.params.id)[0];
  const updatedProduct = { ...filterProduct, ...req.body };

  res.json(updatedProduct);
  logger.info('Se actualizó correctamente el producto', req.params.id);
})

// DESTROY
productsRoutes.delete('/:id', (req, res) => {
  const filterProduct = products.filter(product => product.id === req.params.id)[0];

  const productsWithoutSelected = products.filter(product => product.id !== req.params.id)[0];

  products = productsWithoutSelected;

  res.json(filterProduct);
  logger.info('Se eliminó correctamente el producto', req.params.id);
});

module.exports = productsRoutes;
