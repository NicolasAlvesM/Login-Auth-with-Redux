import mongoose from 'mongoose'
const {Schema,model} = mongoose
const companySchema = new Schema({
    name: {
        type: String,
        required: true,
      },
    description: {
      type: String,
      required: true,
    },
    cnpj: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    user:{
      type: String,
      unique: true,
      required: true,
    }
})

export default model('Company',companySchema,'companies');