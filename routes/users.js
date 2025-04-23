const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/rolecheck');
const { check } = require('express-validator');
const userController = require('../controllers/userController');

router.get('/me', auth, userController.getCurrentUser);

router.get('/', auth, roleCheck(['admin']), userController.getAllUsers);

router.get('/:id', auth, userController.getUserById);

router.put('/:id', auth, [
    check('username', 'Username is required').optional().not().isEmpty(),
    check('email', 'Please include a valid email').optional().isEmail()
], userController.updateUser);

router.delete('/:id', auth, roleCheck(['admin']), userController.deleteUser);

module.exports = router;