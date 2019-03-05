const bodyParser = require('body-parser')
const express = require('express')

const app = express()

// ---------- app Settings ----------
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// ---------- Object with the routers ----------
const router = {
  index: require('./routes/index'),
  users: require('./routes/users'),
  auth: require('./routes/auth')
}

// ---------- routes Settings ----------
app.use('/', router.index)
app.use('/users', router.users)
app.use('/auth', router.auth)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('[index.js: Listening on ' + port + ']')
})

module.exports = app
