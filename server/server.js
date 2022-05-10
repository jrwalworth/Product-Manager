//import libs and db
const express = require('express');
const cors = require('cors');
require('./config/mongoose.config');

//initialize express app
const app = express();
const PORT = 8000;

//prep app 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: "http://localhost:3000"
}),);

//import routes
require('./routes/product.routes')(app);

//listen
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT: ${PORT}`);
});

