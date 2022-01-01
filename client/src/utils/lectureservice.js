import axios from 'axios'

// export function fetchLectures() {
//   axios.get('/lectures').then((res) => {
//     return res.data
//   })
// }

export function addLecture(name, lecturelink) {
  if (name !== '') {
    axios({
      method: 'post',
      url: '/lecture',
      data: {
        title: `${name}`,
        link: `${lecturelink}`,
      },
    })
  }
}

export function editLecture(id, newName, newLink) {
  axios({
    method: 'patch',
    url: `/lecture/${id}`,
    data: {
      title: `${newName}`,
      link: `${newLink}`,
    },
  })
}

export function removeLecture(id) {
  axios({
    method: 'delete',
    url: `/lecture/${id}`,
  })
}
