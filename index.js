const express = require("express")
const prodRouter = require("./Routes/productRouter")
const error_Message = require("./Middlewares/errorMessage")

const app = express()

require("dotenv").config()
require("colors")


// When we get data from user ,
// we should use these 2 lines
//

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/api/user",prodRouter)

// Middlewares that are used between request and response

app.use(error_Message)

app.listen(process.env.PORT,()=>{
    console.log(`Server start on Port ${process.env.PORT.yellow}`)
})