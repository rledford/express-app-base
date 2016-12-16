
module.exports = (app) => {
  app.route('/')
  .get((req, res) => {
    res.render('index', {message: 'the ejs rendering engine works'});
  });
}
