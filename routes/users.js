const { Router } = require("express")
const { handleGetAllUsers, handleGetUserById, handleGetAllUserEmails, handleAddNewUser, handleUpdateUser } = require("../controllers/users")

const router = Router()

router.get('/', handleGetAllUsers)
router.get('/:id', handleGetUserById)
router.get('/emails', handleGetAllUserEmails)

router.post('/', handleAddNewUser)

router.put('/:id', handleUpdateUser)

module.exports = router