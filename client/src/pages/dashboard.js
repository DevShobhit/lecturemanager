import React, { useState, useEffect } from 'react'
import List from '../components/list/list'
import ScheduleElement from '../components/schedule/schedule'
import { HContainer, IHContainer } from '../components/list/list.styles'
import { FlexContainer, TopBar } from './dashboard.styles'
import { Wrapper } from './dashboard.styles'
import Theme from '../utils/themes'
import { fetchLectures } from '../utils/lectureservice'
import { fetchSchedule } from '../utils/scheduleservice'
import axios from 'axios'

// let data = [
//   {
//     title: 'Lecture 1',
//     link: 'https://meet.link1.com',
//   },
//   {
//     title: 'Lecture 2',
//     link: 'https://meet.link2.com',
//   },
//   {
//     title: 'Lecture 3',
//     link: 'https://meet.link3.com',
//   },
//   {
//     title: 'Lecture 4',
//     link: 'https://meet.link4.com',
//   },
//   {
//     title: 'Lecture 5',
//     link: 'https://meet.link5.com',
//   },
//   {
//     title: 'Lecture 6',
//     link: 'https://meet.link6.com',
//   },
// ]

// const scheduledata = [
//   {
//     dayName: 'Monday',
//     lectures: [
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//     ],
//   },
//   {
//     dayName: 'Tuesday',
//     lectures: [
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//     ],
//   },
//   {
//     dayName: 'Wednesday',
//     lectures: [
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//       {
//         lectureName: 'Lecture 1',
//         stime: '08:00',
//         etime: '09:00',
//       },
//     ],
//   },
//   {
//     dayName: 'Thursday',
//     lectures: [],
//   },
//   {
//     dayName: 'Friday',
//     lectures: [],
//   },
//   {
//     dayName: 'Saturday',
//     lectures: [],
//   },
// ]

const schedulesdata = [
  {
    dayName: 'Monday',
    lectures: [],
  },
  {
    dayName: 'Tuesday',
    lectures: [],
  },
  {
    dayName: 'Wednesday',
    lectures: [],
  },
  {
    dayName: 'Thursday',
    lectures: [],
  },
  {
    dayName: 'Friday',
    lectures: [],
  },
  {
    dayName: 'Saturday',
    lectures: [],
  },
]

function Dashboard() {
  const [activeTheme, setActiveTheme] = useState('dark')

  const [lectures, setLectures] = useState({
    lecturedata: [],
    isFetching: false,
    isFetched: false,
  })

  const [schedules, setSchedules] = useState({
    scheduledata: [],
    isFetching: false,
    isFetched: false,
  })

  function toggleActiveTheme() {
    activeTheme === 'dark' ? setActiveTheme('light') : setActiveTheme('dark')
  }

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const res = await axios.get('/lectures')
        res &&
          setLectures({
            lecturedata: res.data,
            isFetching: true,
            idFetched: false,
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchLectures()
  }, [])

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const res = await axios.get('/schedules')
        // const res = await fetchSchedule()
        // console.log(res)
        res.data &&
          res.data.forEach((e) => {
            console.log('Lectures', schedulesdata[e.day].lectures)
            schedulesdata[e.day].lectures.push(e)
          })

        console.log('Schedules', schedulesdata)

        // res &&
        //   setSchedules({
        //     scheduledata: res,
        //     isFetching: false,
        //     isFetched: true,
        //   })
      } catch (e) {
        console.log(e)
        // setSchedules({
        //   scheduledata: schedules.scheduledata,
        //   isFetching: false,
        //   isFetched: true,
        // })
      }
    }
    fetchSchedules()
  }, [])

  // useEffect(() => {
  //   const fetchlectures = async () => {
  //     try {
  //       setLectures({
  //         lecturedata: lectures.lecturedata,
  //         isFetching: false,
  //         isFetched: false,
  //       })

  //       axios.get('/lectures').then((res) => {
  //         console.log(res)
  //         setLectures({
  //           lecturedata: res.data,
  //           isFetching: false,
  //           isFetched: true,
  //         })
  //       })
  //       //   if (res)
  //       //     setLectures({
  //       //       lecturedata: res,
  //       //       isFetching: false,
  //       //       isFetched: true,
  //       //     })
  //     } catch (e) {
  //       console.log(e)
  //       setLectures({
  //         lecturedata: lectures.lecturedata,
  //         isFetching: false,
  //         isFetched: true,
  //       })
  //     }
  //   }
  //   fetchlectures()
  // }, [lectures.lecturedata])

  // useEffect(() => {
  //   const fetchSchedules = async () => {
  //     try {
  //       setSchedules({
  //         scheduledata: schedules.scheduledata,
  //         isFetching: false,
  //         isFetched: false,
  //       })

  //       const res = await axios.get('/schedules')
  //       // const res = await fetchSchedule()
  //       console.log(res)
  //       res.data &&
  //         res.data.forEach((e) => {
  //           schedulesdata[e.day].lectures = e
  //         })

  //       res &&
  //         setSchedules({
  //           scheduledata: res,
  //           isFetching: false,
  //           isFetched: true,
  //         })
  //     } catch (e) {
  //       console.log(e)
  //       setSchedules({
  //         scheduledata: schedules.scheduledata,
  //         isFetching: false,
  //         isFetched: true,
  //       })
  //     }
  //   }
  //   fetchSchedules()
  // }, [])

  return (
    <Theme activeTheme={activeTheme}>
      <div>
        <TopBar>
          <HContainer>
            <div>Student Lecture Management Portal</div>
            <IHContainer>
              <div
                onClick={toggleActiveTheme}
                style={{ marginRight: '1.2rem', cursor: 'pointer' }}
              >
                Change Theme
              </div>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  axios.get('/logout')
                }}
              >
                Logout
              </div>
            </IHContainer>
          </HContainer>
        </TopBar>
        <FlexContainer>
          <Wrapper>
            <List items={lectures.lecturedata} />
          </Wrapper>
          <Wrapper>
            <ScheduleElement schedules={schedulesdata} />
          </Wrapper>
        </FlexContainer>
      </div>
    </Theme>
  )
}

export default Dashboard
