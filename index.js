const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const members = require("./Members")

const app = express()

//middleware
const logger = (req, res, next)=>{
    console.log('hello from middle ware');
    next()
}

//init logger middlewar
app.use(logger)

app.get('/api/members', (req, res)=>{
    res.json(members)
})

app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, ()=>console.log(`Server started on port: ${PORT}`))
