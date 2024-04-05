const express = require('express');
const router = express.Router();

const sportController = require('../controller/sportsController')

router.get('/api/recommendations/posts',sportController.recommendedPost)


module.exports = router;