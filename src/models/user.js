const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  microsoftId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
})

UserSchema.virtual('Lectures', {
  ref: 'Lecture',
  localField: '_id',
  foreignField: 'owner',
})

UserSchema.virtual('Schedules', {
  ref: 'Schedule',
  localField: '_id',
  foreignField: 'owner',
})

module.exports = mongoose.model('User', UserSchema)
