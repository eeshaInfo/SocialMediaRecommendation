const express = require('express');
const router = express.Router();

const userController = require('../controller/userController')
const sportController = require('../controller/sportController')

router.get('/api/recommendations/posts',sportController.recommendedPost)