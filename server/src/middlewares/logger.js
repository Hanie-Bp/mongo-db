function logger(req, res, next) {
  console.log(`req method: ${req.method}, requset url: ${req.url}`);
  next()
}

module.exports = logger