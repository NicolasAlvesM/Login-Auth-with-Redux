import mongoose from 'mongoose';
import '../models/CompanyModel'
import '../models/UserModel'



mongoose.connect(`mongodb://db:27017/loginDB?readPreference=primary&appname=MongoDB%20Compass&ssl=false&gssapiServiceName=mongodb`,{ useUnifiedTopology: true,useNewUrlParser:true }  )
