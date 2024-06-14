const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv').config();

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET_KEY
});
    
async function uploadFileToCloud(localFilePath)   {

    try {

        if(!localFilePath)  return null;

        const uploadResult = await cloudinary.uploader.upload(localFilePath,{
            resource_type : "auto",
        })
        
        console.log("File uploaded to cloudinary",uploadResult);
        return uploadResult;
    }
    catch(err)  {
        console.log(err);
    }
    
}

module.exports = {uploadFileToCloud};
    