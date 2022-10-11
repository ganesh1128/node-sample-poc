const express = require('express')
const app = express()

app.use(express.json())

app.get("/get", function(req,res) {
res.send('This is the test')
} )

app.listen(3000, function(){
    console.log("app running in port 3000")
})