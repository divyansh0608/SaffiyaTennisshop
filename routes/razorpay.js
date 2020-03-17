const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require('../controllers/auth');
const { userById} = require('../controllers/user');
const { generateToken}= require("../controllers/razorpay")

router.get("/razorpay/getToken/:userId", requireSignin, isAuth, generateToken)

router.param("userId",userById)
module.exports= router