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

//   server.get('/mate/hot', (req, res) => {
//     return app.render(req, res, '/mate', { id: 'hot' })
//   })

//   server.get('/mate/terere', (req, res) => {
//       return app.render(req, res, '/mate', { id: 'terere'})
//   })

//   server.get('/googled87b98058c02dda0.html', (req, res) => {
//     return res.send('google-site-verification: googled87b98058c02dda0.html')
//   })

//   server.get('/robots.txt', (req, res) => {
//     return res.sendFile('robots.txt', {
//       root: __dirname
//     })
//   })

  // server.use('/email', emailRoute)

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