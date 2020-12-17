import mongoose from 'mongoose'
const {Schema,model,SchemaTypes} = mongoose
mongoose.set('useCreateIndex', true);
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: true,
        unique: true
      },
    password: {
        type: String,
        required: true,
      },
      company:[{
          type:SchemaTypes.ObjectId,
          ref:'Company'
      }]
})

  export default model('User', userSchema, 'users');