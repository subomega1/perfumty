import User from "../models/User.js"; 
import bcrypt from "bcryptjs";


export const signup =async (req, res) => {
     
    try {
        const { name, email, password , confirmPassword, isAdmin } = req.body
        if (!name || !email || !password || !confirmPassword || !isAdmin) {
            return res.status(400).json({ error: "All fields are required" })
        }
        if(password !== confirmPassword){
            return res.status(400).json({ error: "Passwords do not match" }) 
        }
        if(User.findOne({email})){
            return res.status(400).json({ error: "User already exists" })
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            isAdmin
        })
        if(newUser){
            await newUser.save();
            res.status(201).json({ message: "User created successfully",
             user: {
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin
             }
            })
        }
        
        
    } catch (error) {
        
    }
     
}