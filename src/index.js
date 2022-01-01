const express = require('express')
const authRouter = require('./routers/auth')
const LectureRouter = require('./routers/lecture')
const ScheduleRouter = require('./routers/schedule')
const auth = require('./middlewares/auth')
const session = require('express-session')
const mongoose = require('mongoose')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const config = require('./config')
const path = require('path')

require('./middlewares/passport')(passport)
require('./db/mongoose')

const app = express()

const port = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.get('/', auth, (req, res) => {
  res.sendStatus(200)
})

app.use(cookieParser())
app.use(authRouter)
app.use(LectureRouter)
app.use(ScheduleRouter)

app.use(express.static('client/build'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
})

app.listen(port, () => console.log('Server Up on the port : ', port))
