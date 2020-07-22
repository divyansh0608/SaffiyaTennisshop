const User = require('../models/user');
const braintree = require('razorpay');
require('dotenv').config()

// const gateway = razorpay.connect({   
//     key_id:process.env.RAZORPAY_API_KEY,
//     key_secret:process.env.RAZORPAY_API_SECRET
//    })
// let demo = new Razorpay({
//     key_id:process.env.RAZORPAY_API_KEY,
//     key_secret:process.env.RAZORPAY_API_SECRET
// })



// exports.generateToken = (req, res) => {   
//     gateway.clientToken.generate({},function(err,response){
//         if(err){
//             res.status(500),send(err)
//         }
//         else{
//             res.send(response)
//         }
//     })
  
    
// }

// exports.generateToken = (req,res) =>{
//  gateway.clientToken.generate({}, function(err,response){
//      if(err){
//          res.status(500).send(err)
//      }
//      else{
//          res.send(response)
//      }
//  })
// }
// var instance = new Razorpay({
//     key_id: 'YOUR_KEY_ID',
//     key_secret: 'YOUR_KEY_SECRET'
//   })
// const User = require('../models/user');
// const Razorpay = require('razorpay');
// require('dotenv').config()

// const gateway = razorpay.connect({   
//     key_id:process.env.RAZORPAY_API_KEY,
//     key_secret:process.env.RAZORPAY_API_SECRET
//    })
// // let demo = new Razorpay({
// //     key_id:process.env.RAZORPAY_API_KEY,
// //     key_secret:process.env.RAZORPAY_API_SECRET
// // })



// exports.generateToken = (req, res) => {
//     gateway.clientToken.generate({},function(err,response){
//         if(err){
//             res.status(500),send(err)
//         }
//         else{
//             res.send(response)
//         }
//     })
    
    
// }