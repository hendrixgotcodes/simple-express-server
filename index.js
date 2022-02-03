const express = require('express')
const path = require('path')
const exphbs= require('express-handlebars')
const PORT = process.env.PORT || 5000
const app = express()
const members = require('./Members')

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Handlebars middleware
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// app.use(express.static(path.join(__dirname, "public")))

//memebers api route
app.use('/api/members', require('./routes/api/members'))

//Homepage
app.get('/', (req, res)=>
    res.render('index',{
        title: "Member app",
        members
    })
)

app.listen(PORT, ()=>console.log(`Server started on port: ${PORT}`))
