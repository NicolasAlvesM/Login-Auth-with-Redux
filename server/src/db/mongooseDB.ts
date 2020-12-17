import mongoose from 'mongoose';
import '../models/CompanyModel'
import '../models/UserModel'

mongoose.connect('mongodb+srv://nicolasalves:moreno22@cluster0.wr9sr.mongodb.net/loginDB?retryWrites=true&w=majority',{ useUnifiedTopology: true,useNewUrlParser:true }  )

