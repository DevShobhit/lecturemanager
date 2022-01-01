const Lecture = require('../models/lecture')

function get(req, res) {
  const docquery = Lecture.find({ owner: req.user._id })
  docquery
    .exec()
    .then((lecture) => {
      res.json(lecture)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

function create(req, res) {
  const { title, link } = req.body

  const lecture = new Lecture({ title, link, owner: req.user._id, ref: 'User' })
  lecture
    .save()
    .then(() => {
      res.json(lecture)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

function update(req, res) {
  const { id, title, link } = req.body

  Lecture.findOne({ _id: req.params.id, owner: req.user._id })
    .then((lecture) => {
      lecture.title = title
      lecture.link = link
      lecture.save().then(res.json(lecture))
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

function destroy(req, res) {
  const { id } = req.params

  Lecture.findOneAndRemove({ _id: req.params.id, owner: req.user._id })
    .then((lecture) => {
      res.json(lecture)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

module.exports = { get, create, update, destroy }
