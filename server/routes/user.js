// 1. import any needed libraries
const express = require("express");
const User = require('../models/user'); //accesses functions in user model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/login', async (req, res) => {
    try {
      const user = await User.login(req.body.Username, req.body.Password);
      res.send({...user, Password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/register', async (req, res) => {
    try {
      const user = await User.register(req.body.Firstname,req.body.Lastname, req.body.Email,  req.body.Gender, req.body.Age, req.body.DateofBirth, req.body.Username, req.body.Password);
      res.send({...user, Password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .post('/retriveUserData', async (req, res) => {
    try {
        const user = await User.retriveUserData(req.body.UsernameOrEmail);
        res.send({ ...user, Password: undefined });
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

  .put('/update', async (req, res) => {
    try {
      const user = await User.updatePassword(req.body.id, req.body.Password);
      res.send({...user, Password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })



  .delete('/delete', async (req, res) => {
    try {
      await User.deleteUser(req.body.id);
      res.send({ success: "Account deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;