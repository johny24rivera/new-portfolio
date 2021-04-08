const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 5000;

const portfolioRoutes = require('./routes/main');

const app = express();

app.use(express.static(path.join(__dirname, 'Public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(bodyParser({ extended: false }))
  .use('', portfolioRoutes);

app.listen(PORT);