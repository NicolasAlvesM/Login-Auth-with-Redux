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

userSchema.virtual('companies',{
  ref:'Company',
  localField:'username',
  foreignField:'user'
})

  userSchema.set('toObject', { virtuals: true });
  userSchema.set('toJSON', { virtuals: true });

  export default model('User', userSchema, 'users');
  