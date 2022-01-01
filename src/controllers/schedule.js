const Schedule = require('../models/schedule')

function get(req, res) {
  const docquery = Schedule.find({ owner: req.user._id })
  docquery
    .exec()
    .then((schedule) => {
      res.json(schedule)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

function create(req, res) {
  const { day, schedule, startTime, endTime } = req.body

  const lectureschedule = new Schedule({
    day,
    schedule,
    startTime,
    endTime,
    owner: req.user._id,
    ref: 'User',
  })
  lectureschedule
    .save()
    .then(() => {
      res.json(lectureschedule)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

function update(req, res) {
  const { id, schedule, startTime, endTime } = req.body

  Schedule.findOne({ _id: req.params.id, owner: req.user._id })
    .then((lectureschedule) => {
      lectureschedule.schedule = schedule
      lectureschedule.startTime = startTime
      lectureschedule.endTime = endTime
      lectureschedule.save().then(res.json(lectureschedule))
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

function destroy(req, res) {
  const { id } = req.params

  Schedule.findOneAndRemove({ _id: req.params.id, owner: req.user._id })
    .then((schedule) => {
      res.json(schedule)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

module.exports = { get, create, update, destroy }
