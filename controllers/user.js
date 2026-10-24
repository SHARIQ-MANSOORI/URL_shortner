const User = require('../models/user')

async function handleUserRegister(req,res){
    const {username , email , password} = req.body;

    if(!username){
        console.log("username is required");
        return res.json({message:"Username is required" , status:400})
    }
     if(!email){
        console.log("email is required");
        return res.json({message:"email is required" , status:400})
    }
     if(!password){
        console.log("password is required");
        return res.json({message:"password is required" , status:400})
    }

    const newUser = await User.create({
        username:username,
        email:email,
        password:password,
    })


    console.log("{message:User Createrd , status: 201}",newUser)
    return res.render("home");
}


module.exports = {handleUserRegister}