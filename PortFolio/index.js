const express = require('express')
const path = require('path')
const app = express()
const port = 8000

const homePage = path.join(__dirname,"./public/index.html")

//Middlewares.....
app.use(express.static(path.join(__dirname,"public")))


//routes........

app.get('/',(req,res)=>{
    res.sendFile(homePage)
})

// run the server.......
app.listen(port,(err,data)=>{
    if(err) console.log(err)
    else console.log(`server is running at http://localhost:${port}`)
})