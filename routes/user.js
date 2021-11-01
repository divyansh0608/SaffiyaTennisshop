const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const { userById, read, update, purchaseHistory } = require('../controllers/user');

router.get('/secret', requireSignin, (req, res) => {
    res.json({
        user: 'got here yay'
        // user: req.profile
    });
}); 

router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);
router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);

router.param('userId', userById);

module.exports = router;
// {"_id":{"$oid":"5e6a6b3d07e7b435a8474f22"},"role":{"$numberInt":"0"},"history":[],"name":"vibhu","email":"vibhu@gmail.com","salt":"501db900-6483-11ea-ac96-db707ff3e71e","hashed_password":"1fceb05c2f963281bb39d723c6029e47b262f9d5","createdAt":{"$date":{"$numberLong":"1584032573588"}},"updatedAt":{"$date":{"$numberLong":"1584032573588"}},"__v":{"$numberInt":"0"}}