const mongoose= require("mongoose")
mongoose.connect("
url",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{console.log("mongoose connected successfully")}).catch((err)=>{console.log(err)})
