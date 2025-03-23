import jwt from 'jsonwebtoken';

const generateToken=(userId,role,res)=>jwt.sign({userId,role},process.env.JWT_SECRET,{expiresIn:'30d'});

res.cookie
//naaml el middle ware