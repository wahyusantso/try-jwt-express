const UserModels = require('../models/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getAllUser = async (req, res) => {
    try {
        const datas = await UserModels.getAllUser();

        res.json({
            message: 'get user success',
            data: datas    
        });
    } catch (error) {
        //handle error
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        });
    }
}

const createUser = async (req, res) => {
    const {body} = req;

    try {
        await UserModels.createNewUser(body);

        res.json({
            message: 'create new user success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        });
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await UserModels.updateUser(body, id);

        res.json({
            message: 'update user success',
            data: {
                id: id,
                ...body
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        });
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;

    try {
        await UserModels.deleteUser(id);

        res.json({
            message: 'delete user success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        });
    }
}

const login = async (req, res) => {
    const {body} = req;
    try {
        const secretKey= process.env.SECRET_KEY_TOKEN;
        
        //buat token ketika autentikasi berhasil
        const token = jwt.sign({name: body.name}, secretKey, {expiresIn: '10m'}); //token expired in 10 minute. payload atau data yang disimpan bisa berupa user id, user name.
        res.status(200).json({
            token: token
        });
    } catch (error) {
        res.status(500).json({message: 'login failed'});
    }
}

module.exports = { 
    getAllUser, 
    createUser,
    updateUser,
    deleteUser,
    login 
}