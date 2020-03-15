const db = require("../data/dbConfig")

async function getUsers() {
    return db('users')
}

async function getUserID(id) {
    return db('users').where({ id })
}

async function getUserEmails() {
    return db('users').select("users.email")
}

async function addNewUser(data) {
    return db('users').insert(data)
}

async function updateUser(id, data) {
    return db('users').where({ id }).update(data)
}

async function removeUser(id) {
    return db('users').where({ id }).delete()
}

module.exports = {
    getUsers,
    getUserID,
    getUserEmails,
    addNewUser,
    updateUser,
    removeUser
}