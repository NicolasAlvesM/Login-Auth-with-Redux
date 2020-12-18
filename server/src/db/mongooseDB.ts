import mongoose from 'mongoose';
import '../models/CompanyModel'
import '../models/UserModel'

mongoose.connect('mongodb://127.0.0.1:27017/loginDB?readPreference=primary&appname=MongoDB%20Compass&ssl=false',{ useUnifiedTopology: true,useNewUrlParser:true }  )

