// import lib from './lib'
const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3008
const app = next({ dev })
const handle = app.getRequestHandler()
const bodyParser = require('body-parser')
// import emailRoute from './routes/email/emailRoute'

app.prepare()
.then(() => {
  const server = express()

// Body Parser Middleware

  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})