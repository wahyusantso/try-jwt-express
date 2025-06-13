const express = require('express');
const userController = require('../controller/usercontroller.js');
const route = express.Router();

//create - post
route.post('/', userController.createUser);

//read - get
route.get('/', userController.getAllUser);

//update - patch
route.patch('/:id', userController.updateUser);

//delete - delete
route.delete('/:id', userController.deleteUser);

module.exports = route;