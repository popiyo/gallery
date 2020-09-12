
//SPECIFY WHICH DEPLOYMENT THIS IS
const deploy_env = "test";


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Initializing the app
const app = express();

// connecting the database
let db_source = require('./_config');
let mongodb_url = db_source.mongoURI[deploy_env];


mongoose.connect(`${mongodb_url}`,{ useNewUrlParser: true , useUnifiedTopology: true }, (err)=>{
    if (err) console.log(err)

});



// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json())


app.use('/', index);
app.use('/image', image);




const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});
<<<<<<< HEAD
<<<<<<< HEAD


module.exports = app;
=======
>>>>>>> master
=======
>>>>>>> master
