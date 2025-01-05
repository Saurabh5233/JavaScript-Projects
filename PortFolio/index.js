const express = require('express')
const path = require('path')
const app = express()
const port = 8000
const mongoose = require('mongoose')

//Middlewares.....
app.use(express.static(path.join(__dirname, "public")))
// app.use(express.urlencoded({ extended: true }))




// // connection of mongoose
// const MONGO_URI = "mongodb://127.0.0.1:27017/portFolio-msg"
// mongoose.connect(MONGO_URI)
//     .then(() => console.log("Mongoose Connected...."))
//     .catch((err) => console.log(err))

// //Schema for the  data
// const mySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     subject: {
//         type: String,
//         required: true
//     },
//     message: {
//         type: String,
//         required: true
//     }
// },{timestamps:true })



// //creating model for this schema...
// const myModel = mongoose.model('msgs',mySchema);


const homePage = path.join(__dirname, "./public/index.html")



//routes........

app.get('/', (req, res) => {
    res.sendFile(homePage)
})

app.post('/userQuery',async(req,res)=>{
    const userBody = req.body
    
    // const newUser = new myModel(userBody)
    // newUser.save()

    res.status(201).json({status:"messages to the developer has been temporarily disabled "})
})

// run the server.......
app.listen(port, (err, data) => {
    if (err) console.log(err)
    else console.log(`server is running at http://localhost:${port}`)
})


