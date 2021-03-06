const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 5000;

const portfolioRoutes = require('./routes/main');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(bodyParser({ extended: false }))
  .use('/portfolio', portfolioRoutes)
  .get('/', (req, res, next) => {
    res.render('pages/index');
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));