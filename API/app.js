const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
require('./models/user');
require('./models/booking');
require('./models/orderDetails');


const app = express();
app.use(bodyParser.json());




const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'});
connectDB();

app.use('/', require('./routes/index'));
app.listen(3000);