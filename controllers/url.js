const {nanoid}  = require('nanoid');
const URL = require('../models/url')

async function handleCreateUrl (req,res){

    const body = req.body;
    if(!body.url){
        return res.status(400).json({message:"Url is required"})
    }


    const shortID = nanoid(8);
 
    await URL.create({
        shortId:shortID,
        redirectUrl:body.url,
        visitHistory:[],
    })
     
    return res.json({id:shortID});
}

module.export = {handleCreateUrl}