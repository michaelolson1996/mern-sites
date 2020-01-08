const express = require('express')
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const port = 3000;
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const emailRoute = require('./routes/email/emailRoute');
const verifyRoute = require('./routes/email/verifyRoute');
const getProjects = require('./routes/projects/getProjects');
const getChildren = require('./routes/projects/getChildren');

app.prepare()
.then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.use('/api/email', emailRoute);
  server.use('/api/verify', verifyRoute);
  server.use('/api/projects', getProjects);
  server.use('/api/children', getChildren)

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