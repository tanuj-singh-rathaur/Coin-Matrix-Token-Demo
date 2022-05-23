const express = require('express')
const app = express()
const cors =require('cors')
app.use(express.json())
app.use(cors())
const port = 8080

app.use('/login',(req,res)=>{
    const username=req.body.username
    const password=req.body.password
   if(username=="tanuj" && password=="singh")
    res.send({isAuthenticataed:true,
    result:"logined" 
    })
   else
   res.send({isAuthenticataed:false,
    error:"unable to login, bad credentials"
    }) 
})
app.listen(port, () => console.log(`app is listening on port ${port}!`))
