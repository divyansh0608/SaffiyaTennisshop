const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');//as we would be sending credentials to user in cookie
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();
// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
// const chat=require('./routes/chat');
 const razorpayRoutes = require('./routes/razorpay');
const orderRoutes = require('./routes/order');

const path = require('path');
// app
const app = express();

// // db
// mongoose
//     .connect(process.env.DATABASE, {
//         useNewUrlParser: true,
//         useCreateIndex: true
//     })
//     .then(() => console.log('DB Connected'));
const URI ="mongodb+srv://shopper:shoppass@shopdb-iuvtc.mongodb.net/test?retryWrites=true&w=majority";
const connectDB = async () => {
      await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
      console.log('db connected..!');
    };
connectDB();
// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
console.log(`DIRNAME: ${__dirname}`)
app.use(express.static(path.join(__dirname, 'build')));
// routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
 app.use('/api', productRoutes);
//  app.use('/api',chat);
 app.use('/api', razorpayRoutes);
app.use('/api', orderRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})