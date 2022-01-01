const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: true,
    },
    schedule: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    startTime: {
      type: 'string',
      required: true,
      trim: true,
    },
    endTime: {
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

const Schedule = mongoose.model('Schedules', scheduleSchema)

module.exports = Schedule
