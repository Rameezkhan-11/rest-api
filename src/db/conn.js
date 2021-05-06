const mongoose = require("mongoose");
const db = async()=>{
    
await mongoose.connect("mongodb://localhost:27017/prep",{
useCreateIndex: true,
useUnifiedTopology: true,
useNewUrlParser: true,
useFindAndModify: false





})}
db();