const auth = async (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/login')
  }
}

module.exports = auth