import  mongoose  from "mongoose";

mongoose.connect(
    "mongodb+srv://anaritacarlson:HH6I14McMnPueGK1@cluster0.u7v0u2w.mongodb.net/receitas"

);

let db = mongoose.connection;

export default db;
