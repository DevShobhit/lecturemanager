const express = require('express')
const passport = require('passport')
const config = require('../config')
const router = new express.Router()

router.get(
  '/login',
  function (req, res, next) {
    passport.authenticate('azuread-openidconnect', {
      response: res,
      resourceURL: config.resourceURL,
      customState: 'my_state',
      failureRedirect: '/',
    })(req, res, next)
  },
  function (req, res) {
    console.log('Login was called in the Sample')
    res.redirect('/dashboard')
  }
)

router.get(
  '/auth/openid/return',
  function (req, res, next) {
    passport.authenticate('azuread-openidconnect', {
      response: res,
      failureRedirect: '/',
    })(req, res, next)
  },
  function (req, res) {
    console.log('We received a return from AzureAD.')
    res.redirect('/dashboard')
  }
)

router.post(
  '/auth/openid/return',
  function (req, res, next) {
    passport.authenticate('azuread-openidconnect', {
      response: res,
      failureRedirect: '/',
    })(req, res, next)
  },
  function (req, res) {
    console.log('We received a return from AzureAD.')
    res.redirect('/dashboard')
  }
)

router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    req.logOut()
    res.redirect(config.destroySessionUrl)
  })
})

module.exports = router
