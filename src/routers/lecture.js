const express = require('express')
const router = new express.Router()
const auth = require('../middlewares/auth')
const lectureController = require('../controllers/lectures')

router.get('/lectures', auth, (req, res) => {
  lectureController.get(req, res)
})

router.post('/lecture', auth, (req, res) => {
  lectureController.create(req, res)
})

router.patch('/lecture/:id', auth, (req, res) => {
  lectureController.update(req, res)
})

router.delete('/lecture/:id', auth, (req, res) => {
  lectureController.destroy(req, res)
})

module.exports = router
