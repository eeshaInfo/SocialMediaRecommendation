const UserModel = require('../model/userModel')
const faker = require('faker');

let userController = {}

/**
 * Function to create random user
 * @param {*} req 
 * @param {*} res 
 */
userController.createRandomUser = async(req,res) =>{
    let users = [];
    let count = 100;
    for (let i = 0; i < count; i++) {
      const user = new UserModel({
        username: faker.internet.userName(),
        email: faker.internet.email(),
      });
      users.push(user.save());
    }
    await Promise.all(users);
    console.log(`${count} users inserted successfully.`);
}

module.exports = userController;