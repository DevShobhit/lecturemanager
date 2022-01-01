import React, { useState, useCallback } from 'react'
import {
  HContainer,
  VContainer,
  IHContainer,
  ComponentButton,
  Input,
  AddButton,
  HeadingText,
} from '../list/list.styles'
import {
  ScheduleList,
  ScheduleItem,
  LectureContainer,
  LectureWrapper,
} from './schedule.style'
import {
  addSchedule,
  editSchedule,
  removeSchedule,
} from '../../utils/scheduleservice'

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const EditTemplate = ({
  lectureName,
  stime,
  etime,
  onedit,
  dayName,
  dataid,
  type,
}) => {
  const [lecture, setLecture] = useState(lectureName)
  const [startTime, setStartTime] = useState(stime)
  const [endTime, setEndTime] = useState(etime)

  const handleLectureNameChange = (e) => {
    setLecture(e.target.value)
  }

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value)
    // console.log(e.target.value, startTime)
  }

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value)
    // console.log(e.target.value, endTime)
  }

  const handleSubmit = useCallback(
    (e) => {
      onedit(false)
    },
    [onedit]
  )

  // const EditTemplate = () => {
  return (
    <form>
      <HContainer>
        <VContainer>
          <label htmlFor='startingtime'>Starting Time</label>
          <Input
            type='time'
            name='startingtime'
            id='startingtime'
            onChange={handleStartTimeChange}
            value={startTime}
          />
          <label htmlFor='endingtime'>Ending Time</label>
          <Input
            type='time'
            name='endingtime'
            id='endingtime'
            onChange={handleEndTimeChange}
            value={endTime}
          />
          <label htmlFor='lectureName'>LectureName</label>
          <Input
            type='text'
            name='lectureName'
            id='lectureName'
            onChange={handleLectureNameChange}
            placeholder='Lecture Name'
            value={lecture}
          />
        </VContainer>
        <ComponentButton
          onClick={(e) => {
            e.preventDefault()
            type === 'edit'
              ? editSchedule(
                  dataid,
                  // parseInt(days.indexOf(dayName)),
                  lecture,
                  startTime,
                  endTime
                )
              : addSchedule(
                  parseInt(days.indexOf(dayName)),
                  lecture,
                  startTime,
                  endTime
                )
            handleSubmit()
          }}
        >
          Save
        </ComponentButton>
      </HContainer>
    </form>
  )
  // }
}

const ViewTemplate = ({ lectureName, stime, etime, onedit, dataid }) => {
  const handleEdit = useCallback(
    (e) => {
      onedit(true)
    },
    [onedit]
  )

  return (
    <HContainer>
      <div>
        {stime} - {etime}
      </div>
      <div>{lectureName}</div>

      {/* SVG Icons */}
      <div>
        <IHContainer>
          <div
            onClick={() => {
              handleEdit()
              // setIsEditing(true)
            }}
            style={{ cursor: 'pointer' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              style={{ height: '1.2rem' }}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
              />
            </svg>
          </div>
          <div
            style={{
              cursor: 'pointer',
              color: '#ff464f',
            }}
            onClick={() => {
              removeSchedule(dataid)
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              style={{ height: '1.2rem' }}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </div>
        </IHContainer>
      </div>
    </HContainer>
  )
}

const Lecture = ({ lectureName, stime, etime, dayName, dataid }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      {isEditing ? (
        <EditTemplate
          lectureName={lectureName}
          stime={stime}
          etime={etime}
          onedit={setIsEditing}
          dayName={dayName}
          type='edit'
          dataid={dataid}
        />
      ) : (
        <ViewTemplate
          lectureName={lectureName}
          stime={stime}
          etime={etime}
          onedit={setIsEditing}
          dayName={dayName}
          dataid={dataid}
        />
      )}
    </div>
  )
}

const ExpandedContainer = ({ lectures, dayName }) => {
  const Lectures = lectures.map((lecture, index) => {
    return (
      <LectureWrapper key={'Lecture' + index}>
        <Lecture
          lectureName={lecture.schedule}
          stime={lecture.startTime}
          etime={lecture.endTime}
          key={index}
          dayName={dayName}
          dataid={lecture._id}
        />
      </LectureWrapper>
    )
  })

  return <div>{Lectures}</div>
}

const ScheduleContainer = ({ day, lectures }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  // const DayContainer = schedules.map((schedule, index) => {
  return (
    <VContainer>
      <HContainer>
        <div>{day}</div>

        {/* SVG Icons */}
        <div style={{ cursor: 'pointer' }}>
          {isExpanded ? (
            <svg
              onClick={() => {
                setIsExpanded(!isExpanded)
              }}
              style={{ height: '1.4rem' }}
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 15l7-7 7 7'
              />
            </svg>
          ) : (
            <svg
              onClick={() => {
                setIsExpanded(!isExpanded)
              }}
              style={{ height: '1.4rem' }}
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          )}
        </div>
      </HContainer>

      {isExpanded ? (
        <LectureContainer>
          <ExpandedContainer lectures={lectures} dayName={day} />
          {isAdding ? (
            <LectureWrapper>
              <EditTemplate
                lectureName=''
                stime=''
                etime=''
                onedit={setIsAdding}
                type='add'
                dayName={day}
              />
            </LectureWrapper>
          ) : (
            <AddButton onClick={() => setIsAdding(true)} dayName={day}>
              Add Schedule &nbsp; +
            </AddButton>
          )}
        </LectureContainer>
      ) : (
        ''
      )}
    </VContainer>
  )
  // })

  // return <div>{DayContainer}</div>
}

function ScheduleElement(props) {
  const ScheduleItems = props.schedules.map((schedule, index) => {
    return (
      <ScheduleItem key={'ScheduleItem' + index}>
        <ScheduleContainer
          day={schedule.dayName}
          lectures={schedule.lectures}
          key={'Schedule' + index}
        />
      </ScheduleItem>
    )
  })

  return (
    <div>
      <HeadingText>Schedules</HeadingText>
      <ScheduleList>{ScheduleItems}</ScheduleList>
    </div>
  )
}

export default ScheduleElement
