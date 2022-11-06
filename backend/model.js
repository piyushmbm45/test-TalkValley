import pkg from 'mongoose';
const { Schema, model } = pkg;

const ProductSchema = new Schema({
  name: {
    type: 'string',
    required: true,
  },
  price: {
    type: 'number',
    required: true,
  },
  ratings: {
    type: 'string',
    required: true,
  },
});

const Product = model('Product', ProductSchema, 'Products');
export default Product;
