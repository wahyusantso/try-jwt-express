const UserModels = require('../models/users');

const getAllUser = async (req, res) => {
    try {
        const [rows] = await UserModels.getAllUser(); //menggunakan destrutur untuk mengambil data rows saja. default [rows, field]

        res.json({
            message: 'get user success',
            data: rows    
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

module.exports = { 
    getAllUser, 
    createUser,
    updateUser,
    deleteUser 
}