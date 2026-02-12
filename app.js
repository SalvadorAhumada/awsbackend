const express = require('express');
const app = express();
const userRoutes = require('./routes/executive.routes');

app.use(express.json());
app.use('/api', userRoutes);
app.use('/health', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My app</title>
      </head>
      <body>
        <h1>Hello world</h1>
        <p>App is ok</p>
      </body>
    </html>
  `)
})

module.exports = app;