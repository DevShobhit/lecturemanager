const express = require('express')
const router = new express.Router()
const auth = require('../middlewares/auth')
const scheduleController = require('../controllers/schedule')

router.get('/schedules', auth, (req, res) => {
  scheduleController.get(req, res)
})

router.post('/schedule', auth, (req, res) => {
  scheduleController.create(req, res)
})

router.patch('/schedule/:id', auth, (req, res) => {
  scheduleController.update(req, res)
})

router.delete('/schedule/:id', auth, (req, res) => {
  scheduleController.destroy(req, res)
})

module.exports = router
