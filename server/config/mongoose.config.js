const mongoose = require("mongoose");
const productsDB = 'products';

mongoose.connect(`mongodb://localhost:27017/${productsDB}`, {
    useNewUrlParser:true, 
    useUnifiedTopology:true,
})
.then(() => console.log(`Connected to MongoDB: ${productsDB}`))
.catch((err) => console.log('Database connection error', err));