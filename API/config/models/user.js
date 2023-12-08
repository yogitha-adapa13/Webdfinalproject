let mongoose = require('mongoose');
const bcrypt = require('bcrypt');



// Employee Schema
const User = new mongoose.Schema({
    email: {
        type: String,
        // required:true
    }, 
    fullname: {
        type:String,
        // required:true
    },
    password: {
        type:String,
        // required:true
    }
});

User.pre('save', async function (next){
    try {
        // console.log('Called before saving a user');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        console.log(error);
    }
})

mongoose.model('employees',User)
module.exports = {User}