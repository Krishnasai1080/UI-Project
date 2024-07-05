const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema= new mongoose.Schema({
  Firstname: {type: String, required: true},
  Username: { type: String, unique: true, required: true},
  Email: { type: String, unique: true, required: true},
  Password: { type: String, required: true},
  Lastname: {type: String, required: true},
  Gender: {type: String, required: true},
  Age: {type: String, required: true},
  DateofBirth: {type: String, required: true}
})

const User = mongoose.model("User", userSchema);

async function register(Firstname, Lastname, Email, Gender, Age, DateofBirth, Username, Password) {
  const user = await getUser(Username);
  if(user) throw Error('Username already in use');
  const emailcheck = await getEmail(Email);
  if(emailcheck) throw Error('Email already in use');

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(Password, salt);
  const newUser = await User.create({
    Firstname: Firstname,
    Lastname: Lastname,
    Email: Email,
    Gender: Gender,
    Age: Age,
    DateofBirth: DateofBirth,
    Username:Username,
    Password: hashed
  });

  return newUser._doc;
}


async function login(Username, Password) {
  var user = await getUser(Username);
  if(!user) {
    var user= await getEmail(Username);
    if(!user)throw Error("Username/Email do not Exist");
  }

  const isMatch = await bcrypt.compare(Password,user.Password)
  if(isMatch) throw Error('Wrong Password');
  return user._doc;
}

async function updatePassword(id, Password) {
  const user = await User.updateOne({"_id": id}, {$set: { Password: Password}});
  return user;
}

async function deleteUser(id) {
  await User.deleteOne({"_id": id});
};

async function getUser(Username) {
  return await User.findOne({ "Username": Username});
}

async function getEmail(Email) {
  return await User.findOne({ "Email": Email});
}

module.exports = { 
  register, login, updatePassword, deleteUser , getUser, getEmail
};