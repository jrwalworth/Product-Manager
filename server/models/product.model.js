const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Product title is required."],
        },
        description: {
            type: String,
            maxlength: [255, "Description can only be 255 characters."]
        },
        price: {
            type: Number,
            required: [true, "Price is a required field."],
            min: [0, "Price must be greater than 0."],
        },
    },
    {
        timestamps: true,
    },
);

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;
