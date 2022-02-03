const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))




app.use(express.static(path.join(__dirname, "public")))

//memebers api route
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, ()=>console.log(`Server started on port: ${PORT}`))
