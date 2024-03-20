const express=require(`express`)
const app=express()
var cors = require('cors')
const PORT=4000
const mongoose=require('mongoose')

app.use(express.json());
const {MONGOURI}=require(`./keys`)

app.use(cors())

require(`./models/user`)

app.use(require(`./routes/User`))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log('Connected to MONGODB')
})

mongoose.connection.on('error',(err)=>{
    console.log('Error',err)
})


app.get('/',(req,res)=>{
    res.send("Hello WOrld")
})

app.listen(PORT,()=>{
    console.log("Server is running ")
})