import ProductModel from '../models/ProductModel';
import productsToInsert from '../mockProducts';

const insertMockProducts = async (req, res) => {
  try {
    await ProductModel.insertMany(productsToInsert);
    res.status(201).json({
      message: 'Mock products has been inserted',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  const newProduct = new ProductModel(req.body);

  try {
    const insertedProduct = await newProduct.save();
    res.status(201).json({
      message: 'User has been created',
      data: insertedProduct.result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});

    res.status(200).json({
      message: 'Users received',
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);

    res.status(200).json({
      message: 'Product successfully deleted',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndRemove(id);

    res.status(200).json({
      message: 'Product successfully deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

export default {
  insertMockProducts,
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
};
