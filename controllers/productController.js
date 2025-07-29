const { v4: uuidv4 } = require('uuid');
const products = require('../models/productStore');
const validateProduct = require('../helpers/validateProduct');

const createProduct = (req, res) => {
  const productData = {
    id: uuidv4(),
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    category: req.body.category
  };

  const errors = validateProduct(productData);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  products.push(productData);
  return res.status(201).json({
    message: 'Produk berhasil ditambahkan',
    data: productData
  });
};

const getAllProducts = (req, res) => {
  return res.json({
    message: 'Produk berhasil diambil',
    data: products
  });
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Produk tidak ditemukan' });
  }

  return res.json({
    message: 'Produk berhasil diambil',
    data: product
  });
};

const updateProduct = (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Produk tidak ditemukan' });
  }

  const updatedData = {
    ...products[index],
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    category: req.body.category
  };

  const errors = validateProduct(updatedData);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  products[index] = updatedData;

  return res.json({
    message: 'Produk berhasil diperbarui',
    data: updatedData
  });
};

const deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Produk tidak ditemukan' });
  }

  const deletedProduct = products[index];
  products.splice(index, 1);

  return res.json({ message: 'Produk berhasil dihapus' , data: deletedProduct});
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
