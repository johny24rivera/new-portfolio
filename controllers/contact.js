exports.getMessage = (req, res, next) => {
  console.log(req.body.message);
  res.redirect('/');
};