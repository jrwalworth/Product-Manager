const mongoose = require("mongoose");
const dbName = 'products';

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser:true, 
    useUnifiedTopology:true,
})
.then(() => console.log(`Connected to MongoDB: ${dbName}`))
.catch((err) => console.log('Database connection error', err));