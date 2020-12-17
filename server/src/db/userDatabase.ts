import {MongoClient} from 'mongodb';
const uri='mongodb+srv://nicolasalves:moreno22@cluster0.wr9sr.mongodb.net/loginDB?retryWrites=true&w=majority';
let chachedCollection=null as any
async function conn(){
    if(chachedCollection)
        return chachedCollection

    const mongo=await MongoClient.connect(uri,{useUnifiedTopology:true})
    const collection=mongo.db('loginData').collection('loginusers')

    chachedCollection=collection

    return collection
}
export default conn