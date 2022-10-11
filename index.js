const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get("/get", function(req,res) {
res.send('This is the test')
} )

app.listen(port, function(){})
console.log(`app running in port ${port}`)