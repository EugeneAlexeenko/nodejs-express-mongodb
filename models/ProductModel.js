import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: String,
  price: {
    type: Number,
    min: 0,
  },
  lastModifiedDate: Number,
});

productSchema.pre('save', function setLastModifiedDate(next) {
  this.lastModifiedDate = Date.now();
  next();
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
