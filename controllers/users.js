const userModules = require("../models/users")

async function handleGetAllUsers(req, res) {
    userModules.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
}

async function handleGetUserById(req, res) {
    const { id } = req.params;
    userModules.getUserID(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
}

async function handleGetAllUserEmails(req, res) {
    userModules.getUserEmails()
        .then(emails => {
            res.status(200).json(emails)
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
}

async function handleAddNewUser(req, res) {
    const { data } = req.body;
    userModules.addNewUser(data)
        .then(user => {
            res.status(202).json(user)
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
}

async function handleUpdateUser(req, res) {
    const { id } = req.params;
    const { data } = req.body;
    userModules.updateUser(id, data)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
}

module.exports = { handleGetAllUsers, handleGetUserById, handleGetAllUserEmails, handleAddNewUser, handleUpdateUser }