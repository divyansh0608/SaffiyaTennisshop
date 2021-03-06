const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');//to generate unique strings

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        hashed_password: {
            type: String,
            required: true
        },
        about: {
            type: String,
            trim: true
        },
        salt: String,//is a long string to generate hashed password
        role: {//can be admin(1) or genral user(0)
            type: Number,
            default: 0
        },
        history: {//item purchase history
            type: Array,
            default: []
        }
    },
    { timestamps: true }
);

// virtual field
userSchema
    .virtual('password') //in virtual field we would be sending password from CLIENT SIDE
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    }
};

module.exports = mongoose.model('User', userSchema);
// // {
//     "name": "Divyansh panwar singh",
//     "email": "divyansh008@yahoo.com",
//     "password": "@8juneking",
//     "role": 1
// }