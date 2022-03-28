const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const bodyParser = require('body-parser')

// route
const passwordRouter = require('./src/routers/password-route')

// db
passwords = [{
    site: 'Google',
    email: 'tam@gmail.com',
    keyword: 'tammats',
    password: 'matmat'
}]

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000


// middleware
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))

// set logger
if (process.env.NODE_ENV == 'development') {
    const morgan = require('morgan')
    app.use(morgan('dev'))
}

// view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'))

// static
app.use('/public', express.static('public'))
// app.use('/src', express.static(__dirname + 'public/src'))

app.use('/passwords', passwordRouter)

// shows all passwords
app.get('/:userId', (req, res) => {
    res.render('index', {passwords: passwords})
})
app.post('/p/post', (req, res) => {
    // must be logged in
    // use id for searching
    // append to passwordlist
    console.log('posted a new password')
    console.log(req.body)
    passwords.push(req.body)
    console.log(passwords)
    res.sendStatus(201)
})
app.post('/u/create', (req, res) => {
    // create new user
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})