const express = require('express')
const {postcreate, postGet} = require('../controller/postForm')
const authCheck = require('../Middleware/authCheck')
const upload = require('../Middleware/Upload')
const router = express.Router()

// http method with router 
router.post('/', authCheck, upload.array("images",10), postcreate )
router.get("/", postGet  )


module.exports = router




// const express = require('express')
// const router = express.Router()
// const authCheck = require('../Middleware/authCheck')
// const upload = require('../Middleware/Upload')

// const { createPost, updatePost, deletePost } = require('../controller/postForm')
// const postController = require('../controller/postForm')

// router.post('/createPost', authCheck, upload.single('image'),createPost)
// router.put('/updatePost/:id', authCheck,updatePost)
// router.delete('/deletePost/:id', authCheck,deletePost)

// module.exports = router
