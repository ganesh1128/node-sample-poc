const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get("/get", function(req,res) {
res.send('This is the test 1')
} )

app.listen(port, () => console.log(`app running in port ${port}`))
