const express = require('express')
const path = require('path')
const exphbs= require('express-handlebars')
const PORT = process.env.PORT || 5000
const app = express()

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')




app.use(express.static(path.join(__dirname, "public")))

//memebers api route
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, ()=>console.log(`Server started on port: ${PORT}`))
