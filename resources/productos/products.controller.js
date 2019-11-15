const Product = require('./products.model');

function create(product) {
  return new Product(product).save();
}

function getProducts() {
  return Product.find({});
}

function get(id) {
  return Product.findById(id);
}

function update(id, product) {
  return Product.findOneAndUpdate({ _id: id }, { ...product }, { new: true });
}

function remove(id) {
  return Product.findOneAndDelete(id);
}

module.exports = {
  create,
  getProducts,
  get,
  update,
  remove
}