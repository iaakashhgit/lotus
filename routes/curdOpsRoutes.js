const express = require('express')
const router = express.Router()
const addUser = require('../controllers/addUser')
const listUser = require('../controllers/listUser')
const deleteUser = require('../controllers/deleteUser')
const updateUser = require('../controllers/updateUser')

router.post('addUser',addUser.createUser)
router.get('listUser',listUser.listUser)
router.delete('deleteUser',deleteUser.deleteUser)
router.put('updateUser',updateUser.updateUser)

module.exports = router