const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const UserSchema= new mongoose.Schema({
    email : {
        type: String,
        required: true ,
        unique: true
    } ,
    password:{
        type : String,
        required: true
     }
});

//static signup method
UserSchema.statics.signup = async function(email, password) {

// validation email password
if(!email || !password) {
    throw Error("All fields must be filled in");

} 
if (!validator.isEmail(email)) {
    throw Error("Email is not valid")
}
if (!validator.isStrongPassword(password)) {
throw Error("Password not strong enough")
}

    const exists= await this.findOne({ email})
    if(exists) {
        throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash= await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user ;

}

// static login method
UserSchema.statics.login = async function (email, password) {

    if(!email || !password) {
        throw Error("All fields must be filled in");
    
    } 
    const user= await this.findOne({ email})
    if(!user) {
        throw Error('incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match) {
        throw Error('incorrect password')
    }
    return user ;
}

const User= mongoose.model('User',UserSchema)
module.exports = User ;