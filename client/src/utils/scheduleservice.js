import axios from 'axios'

export function addSchedule(day, schedule, startTime, endTime) {
  if (schedule !== '') {
    axios({
      method: 'post',
      url: '/schedule',
      data: {
        day: `${day}`,
        schedule: `${schedule}`,
        startTime: `${startTime}`,
        endTime: `${endTime}`,
      },
    })
  }
}

export function editSchedule(id, schedule, startTime, endTime) {
  axios({
    method: 'patch',
    url: `/schedule/${id}`,
    data: {
      schedule: `${schedule}`,
      // day: `${day}`,
      startTime: `${startTime}`,
      endTime: `${endTime}`,
    },
  })
}

export function removeSchedule(id) {
  axios({
    method: 'delete',
    url: `/schedule/${id}`,
  })
}
