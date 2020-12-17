import {Request,Response} from 'express'
import jwt from 'jsonwebtoken'
import {promisify} from 'util'
import User from '../models/UserModel'
export default {
  
    async query(req:Request,res:Response){
          const {userId} = req
          const {company} =await User.findOne({_id:userId}).populate('company')
          return res.json(company)
    },

    async add(req:Request,res:Response){
      const {authorization} = req.headers
      const receivedToken = authorization?.split(' ')[1] as string

      try {

          const {_id} = await promisify(jwt.verify)(receivedToken,"secret");  
          const {company} = User.findOne({_id}).populate('company')
          return res.json(company)

        } catch (err) {

          return res.status(401).send({error: "Token invalid"});

        } 
    }
}