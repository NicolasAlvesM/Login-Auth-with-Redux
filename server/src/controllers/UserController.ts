import {Request,Response} from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/UserModel' 
type body={
    username:string,
    password:string
}

export default {
    async query(req:Request,res:Response){

        const users = await User.find().populate('company')
        
        res.json(users)
    },

    async login(req:Request,res:Response){
        const {username,password}=req.body as body
 
        const user = await User.findOne({username})

        if(!user)
            return res.status(500).json({err:'Usuário não existe'});

        const match = await bcrypt.compare(password,user.password);
 
        if(match) {
            const token = jwt.sign({_id:user._id},'secret',{expiresIn:'24h'})
            return res.json({token,username})
        }
        
        return res.status(500).json({err:"Senha incorreta"})
            
    },
    
    async create(req:Request,res:Response){
        const {username,password}=req.body as body

        const user = await User.findOne({username})

        if(user)
            return res.status(500).json({err:"Usuario ja existe"})

        const hashPassword = await bcrypt.hash(password,8)

        const newUser = new User({
            username,
            password:hashPassword
        })

        const savedUser = await newUser.save()

        return res.json({user:savedUser})
    }
}