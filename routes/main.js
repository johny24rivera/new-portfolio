const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');

router.get('/classes', (req, res, next) => {
  res.render('pages/classes');
});

router.get('/contact', (req, res, next) => {
  res.render('pages/contact');
});

router.post('/contact', contactController.getMessage);

module.exports = router;