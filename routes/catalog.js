const express = require('express')
const router = express.Router();

// Controllers 
const commentController = require('../controllers/commentControlller')
const indexConroller = require('../controllers/indexController')

//INDEX ROUTE
router.get('/', (req, res)=>{
    res.send('Welcome to home page')
})

//COMMENT ROUTES 
router.get('/comments', commentController.commentList)
router.get('/comments/:commentid', commentController.commentDetails)



module.exports = router;