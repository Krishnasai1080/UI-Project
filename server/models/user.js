// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const userSchema1= new mongoose.Schema({
  Firstname: {type: String, required: true},
  username: { type: String, unique: true, required: true},
  Email: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  Lastname: {type: String, required: true},
  Gender: {type: String, required: true},
  Age: {type: String, required: true},
  DateofBirth: {type: String, required: true}
})

// 3. create model of schema
const User = mongoose.model("User", userSchema1);

// 4. create CRUD functions on model
//CREATE a user
async function register(username, password) {
  const user = await getUser(username);
  if(user) throw Error('Username already in use');

  const newUser = await User.create({
    Firstname: Firstname,
    Lastname: Lastname,
    Email: Email,
    Gender: Gender,
    Age: Age,
    DateofBirth: DateofBirth,
    username:username,
    password: password
  });

  return newUser;
}

// READ a user
async function login(username, password) {
  const user = await getUser(username);
  if(!user) throw Error('User not found');
  if(user.password != password) throw Error('Wrong Password');

  return user;
}

// UPDATE
async function updatePassword(id, password) {
  const user = await User.updateOne({"_id": id}, {$set: { password: password}});
  return user;
}

//DELETE
async function deleteUser(id) {
  await User.deleteOne({"_id": id});
};

// utility functions
async function getUser(username) {
  return await User.findOne({ "username": username});
}

// 5. export all functions we want to access in route files
module.exports = { 
  register, login, updatePassword, deleteUser 
};