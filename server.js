const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

// route
const passwordRouter = require('./src/routers/password-route')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000


// middleware
app.use(express.urlencoded({extended: true}))

// view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'))

// static
app.use('/public', express.static('public'))


app.use('/passwords', passwordRouter)

// shows all passwords
app.get('/', (req, res) => {
    passwords = [{
        site: 'Google',
        email: 'tam@gmail.com',
        keyword: 'tammats',
        password: 'matmat'
    }]
    res.render('index', {passwords: passwords})
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})