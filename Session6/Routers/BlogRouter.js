const express = require('express');
const { CreateBlog, GetAllBlogs, GetBlogById, UpdateBlog, DeleteBlog } = require('../Controller/BlogsController');
const router = express.Router();


router.post('/', CreateBlog);
router.get('/', GetAllBlogs);
router.get('/:id', GetBlogById);
router.put('/:id', UpdateBlog);
router.delete('/:id', DeleteBlog);


module.exports = router;