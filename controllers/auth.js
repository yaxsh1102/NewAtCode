const bcrypt = require("bcrypt") ;
const  User = require("../models/User") ;
const jwt = require("jsonwebtoken") ;

require("dotenv").config()

exports.signup = async (req, res) => {
    try {
        // get data
        const { username, email, password } = req.body;



        // check if user already exist 
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists",
            })
        }

        // Secured password 
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing password",
            })
        }

        // Create Entry for User
        let user = await User.create({
            username,email,password:hashedPassword
        });

        return res.status(200).json({
            success : true,
            message : "User Created Successfully",
            data : user
        });
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({
            success: false,
            message: "User cannot be register,Please try again later",
        })
    }
}

// Login
exports.login = async (req,res) => {
    try
    {
        const {email,password} = req.body;
        if(!email || !password)
        {
            return res.status(400).json({
                success:false,
                message : "Please fill all the details carefully",
            })
        }

        // check for register user 
        let user = await User.findOne({email});
        if(!user)
        {
            return res.status(401).json({
                success : false,
                message : "User does not exist",
            });
        }

        // Verify password & generate a JWT token

        const payload = {
            email : user.email,
            id : user._id,
            role : user.role,
        };


        // if(await bcrypt.compare(password,user.password)){
        //     // password match
        //     let token = jwt.sign(payload,process.env.JWT_SECRET,{
        //         expiresIn : "2h",
        //     });

        //     user = user.toObject();
        //     user.token = token;
        //     user.password = undefined;

        //     const options = {
        //         expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        //         httpOnly : true,
        //     }

        //     res.cookie("token",token,options).status(200).json({
        //         success : true,
        //         token,
        //         user,
        //         message:"User logged in successfully"
        //     });

        //     res.status(200).json({
        //         success : true,
        //         token,
        //         user,
        //         message:"User loged in successfully"
        //     });
        // }
        // else {
        //     // password not match
        //     return res.status(403).json({
        //         success : false,
        //         message : "Password does not match",
        //     })
        // }

        if(await bcrypt.compare(password , user.password)){
            // let token = jwt.sign(payload , process.env.JWT_SECRET , {
            //     expiresIn:"2h"
            // }) ;

            // user= user.toObject() ;
            // user.password=null ;
            // user.token = token ;


            // const options = {
            //     expires:new Date(Date.now() + 3*24*60*60) ,
            //     httpOnly:true ,

            // }

           return res.status(200).json({
                success : true,
                        
                        
                        message:"User logged in successfully"

            })


        } else{
            return res.status(500).json({
                success:false ,
                message:"Password doen't match"
            })


        }
    }
    catch(err){
        console.error(err)
        return res.status(500).json({
            success : false,
            message : "Login false" 
        })
    }
}


exports.add = async (req, res) => {
    try {
        const { email, course } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Check if course already exists in the user's courses
        if (user.courses.includes(course)) {
            return res.status(400).json({
                success: false,
                message: "Course already exists for the user",
            });
        }

        user.courses.push(course);
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Course added successfully",
            user,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Failed to add course",
        });
    }
};


exports.get = async (req, res) => {
    try {
        const { email } = req.body;

        let user = await User.findOne({ email });
        console.log(user)
       

        // Check if course already exists in the user's courses
      
            return res.status(200).json({
                courses:user.courses , 
                success: false,
                message: "Courses provided",
            });
        

       
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Failed to add course",
        });
    }
};

