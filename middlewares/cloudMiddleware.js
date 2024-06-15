const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv').config();

async function uploadFileToCloud(req,res,next) {

    // Configuration
    const config = await cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET_KEY
    });

    const localFilePath = `./uploads/${req.file.filename}`;

    try {

        if(!localFilePath)  return res.json;

        const uploadResult = await cloudinary.uploader.upload(localFilePath,{
            resource_type : "auto",
        })
        
        console.log("File uploaded to cloudinary",uploadResult);
    }
    catch(err)  {
        console.log(err);
    }

    next();
}

module.exports = {uploadFileToCloud};