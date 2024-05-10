const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS User (
    CustomerID INT NOT NULL AUTO_INCREMENT,
    Firstname VARCHAR(255) NOT NULL ,
    Lastname VARCHAR(255) NOT NULL ,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Gender VARCHAR(255) NOT NULL ,
    Age  VARCHAR(255) NOT NULL ,
    DateofBirth  VARCHAR(255) NOT NULL ,
    Password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(CustomerID));`

  await con.query(sql);  
}

createTable()

// CRUD functions will go here 
//R for READ -- get all users
async function getAllUsers() {
  let sql = `SELECT * FROM User;`
  return await con.query(sql)
}
async function emailExists(email) {
  let sql = `SELECT * FROM User 
    WHERE Email = "${email}"
  `
  return await con.query(sql) 
}


async function register(user) {

  let email = await emailExists(user.Email)
  if(email.length > 0) throw Error("Account with Email already in use")

  let sql = `
    INSERT INTO User(Firstname, Lastname, Email,Gender,Age,DateofBirth,Password)
    VALUES("${user.Firstname}", "${user.Lastname}", "${user.Email}", "${user.Gender}","${user.Age}","${user.DateofBirth}","${user.Password}");
  `
  await con.query(sql)
  const u = await emailExists(user.Email)
  console.log(u)
  return u[0]
}

// READ in CRUD
async function login(user) {
  let currentUser = await emailExists(user.Email)
  if(!currentUser[0]) throw Error("Email does not exist!")
  if(user.Password !== currentUser[0].Password) throw Error("Password does not match!")

  return currentUser[0]
}

// UPDATE in CRUD
async function editUsername(user) {
  let sql = `
    UPDATE User SET
    Username = "${user.Username}"
    WHERE UserID = ${user.UserID}
  `
  await con.query(sql)

  let updatedUser = await userExists(user.Username)
  return updatedUser[0]
}

// DELETE in CRUD
async function deleteAccount(user) {
  let sql = `
    DELETE FROM User
    WHERE UserID = ${user.UserID}
  `
  await con.query(sql)
}

module.exports = { getAllUsers, login, register, editUsername, deleteAccount }