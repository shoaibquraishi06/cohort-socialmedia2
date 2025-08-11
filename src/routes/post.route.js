const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const  userModel = require('../models/user.model');
const  authMiddleware = require ("../middlewares/auth.middleware")
const {cretePostcontroller} = require("../controllers/post.controller")
const multer = require('multer')

const upload = multer({ storage: multer.memoryStorage() });





router.post('/', authMiddleware,
  upload.single("image"),
   cretePostcontroller
     )



module.exports = router;