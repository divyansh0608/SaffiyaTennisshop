const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

var Insta = require('instamojo-nodejs');
router.post("/razorpay",    (req, res) => {
    Insta.setKeys('test_6cfba934173e4f4d4e211b38741', 'test_cf41d1b9a8f7ea1aa57f036dea7');

    const data = new Insta.PaymentData();
    Insta.isSandboxMode(true);
    data.purpose = req.body.purpose;
    data.amount = req.body.amount;
    data.buyer_name = req.body.buyer_name;
    data.redirect_url = req.body.redirect_url;
    data.email = req.body.email;
    data.phone = req.body.phone;
    data.send_email = true;
    data.webhook = 'http://www.example.com/webhook/';
    data.send_sms = false;
    data.allow_repeated_payments = false;

    Insta.createPayment(data, function(error, response) {
        if (error) {
            console.log('>>>>>>>error', error)
        } else {

          const responseData = JSON.parse(response);
          console.log('>>>>>>>>>After parse Response', responseData);

          const redirectUrl = responseData.payment_request.longurl;
          console.log('Redirect url>>', redirectUrl);
          res.status(200).send(redirectUrl);
        }
      });

});

module.exports= router


// const express = require("express");
// const router = express.Router();

// const { requireSignin, isAuth } = require('../controllers/auth');
// const { userById} = require('../controllers/user');
// const { generateToken}= require("../controllers/razorpay")

// router.get("/razorpay/getToken/:userId", requireSignin, isAuth, generateToken)

// router.param("userId",userById)
// module.exports= router