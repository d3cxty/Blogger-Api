const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/rolecheck');
const ownerCheck = require('../middleware/ownercheck');
const { check } = require('express-validator');
const blogController = require('../controllers/blogController');

router.get('/', blogController.getAllBlogs);

router.get('/:id', blogController.getBlogById);

router.post('/', auth, roleCheck(['author', 'admin']), [
    check('title', 'Title is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty()
], blogController.createBlog);

router.put('/:id', auth, ownerCheck, [
    check('title', 'Title is required').optional().not().isEmpty(),
    check('content', 'Content is required').optional().not().isEmpty()
], blogController.updateBlog);

router.delete('/:id', auth, ownerCheck, blogController.deleteBlog);

router.get('/category/:categoryId', blogController.getBlogsByCategory);

module.exports = router;