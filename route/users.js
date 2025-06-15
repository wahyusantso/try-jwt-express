const express = require('express');
const userController = require('../controller/usercontroller.js');
const route = express.Router();
const rateLimit = require('../middleware/rateLimit');
const { verifyToken } = require('../middleware/authJwt');

//create - post
route.post('/', userController.createUser);

//read - get
route.get('/', [verifyToken, rateLimit], userController.getAllUser);

//update - patch
route.patch('/:id', userController.updateUser);

//delete - delete
route.delete('/:id', userController.deleteUser);

route.post('/login', userController.login);

module.exports = route;