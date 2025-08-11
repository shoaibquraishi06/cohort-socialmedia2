const postModel = require("../models/post.model");
// const generateCaption = require("../service/ai.service")
const uploadFile = require('../service/storage.service')
const { v4: uuid } = require('uuid');

async function cretePostcontroller(req,res) {

    const file = req.file;
    console.log("File received:", file);
    res.json({
        message: "post successfully"
    })
    


    // const base64Image = Buffer.from(file.buffer).toString("base64");
    
    // const caption = await generateCaption(base64Image);
    // const result = await uploadFile(file.buffer,`${uuidv4()}`)

    // console.log("Generated caption:",
    //      caption, 
    //     result);
    

    
}

module.exports = {
    cretePostcontroller


};