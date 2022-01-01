const mongoose = require('mongoose')

const lectureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: 'string',
      required: true,
      trim: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Lecture = mongoose.model('Lectures', lectureSchema)

module.exports = Lecture
