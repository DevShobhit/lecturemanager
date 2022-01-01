import React from 'react'
import {
  ListComponent,
  ListItem,
  HContainer,
  VContainer,
  IHContainer,
  ComponentButton,
  ComponentLink,
  ComponentName,
  SVG,
  DropdownContainer,
  Input,
  SHContainer,
  CopyContainer,
  JoinLink,
  AddButton,
  HeadingText,
} from './list.styles'
import { useState, useEffect, useCallback } from 'react'
import {
  editLecture,
  addLecture,
  removeLecture,
} from '../../utils/lectureservice'

const Svg = () => {
  return (
    <SVG
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
    >
      <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
    </SVG>
  )
}

const EditTemplate = ({ lecture, lecturelink, onedit, dataid, type }) => {
  const [name, setName] = useState(lecture)
  const [link, setLink] = useState(lecturelink)
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleLinkChange = (e) => {
    setLink(e.target.value)
  }

  const handleSubmit = useCallback(() => {
    onedit(false)
  }, [onedit])

  return (
    <div>
      <form>
        <HContainer>
          <VContainer style={{ lineHeight: '2' }}>
            <label htmlFor='lectureName'>Lecture Name</label>
            <Input
              type='text'
              name='lectureName'
              id='lectureName-input'
              placeholder='Lecture Name'
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor='lectureName'>Lecture Link</label>
            <Input
              type='url'
              name='lectureLink'
              id='lectureLink-input'
              placeholder='Lecture Link'
              value={link}
              onChange={handleLinkChange}
            />
          </VContainer>

          <ComponentButton
            type='submit'
            onClick={(e) => {
              e.preventDefault()
              type === 'edit'
                ? editLecture(dataid, name, link)
                : addLecture(name, link)
              handleSubmit()
            }}
          >
            Save
          </ComponentButton>
        </HContainer>
      </form>
    </div>
  )
}

const ViewTemplate = ({ lecture, link, onedit, dataid }) => {
  const [isopen, setIsOpen] = useState(false)
  const [copySuccess, setCopySuccess] = useState('')
  useEffect(() => {
    setTimeout(() => setCopySuccess(''), 1000)
  }, [copySuccess])

  const handleOpen = () => {
    setIsOpen(!isopen)
  }

  const handleCopy = async (link) => {
    try {
      await navigator.clipboard.writeText(link)
      setCopySuccess('Copied!')
    } catch (err) {
      setCopySuccess('Failed to copy!')
    }
    setIsOpen(false)
  }

  const handleEdit = useCallback(() => {
    onedit(true)
  }, [onedit])

  return (
    <div>
      <HContainer>
        <VContainer>
          <ComponentName>{lecture}</ComponentName>
          <ComponentLink>{link}</ComponentLink>
        </VContainer>
        <IHContainer>
          <ComponentButton>
            <JoinLink href={link}>Join</JoinLink>
          </ComponentButton>
          <div onClick={handleOpen}>
            <Svg />
          </div>
        </IHContainer>
      </HContainer>
      {copySuccess && <CopyContainer>{copySuccess}</CopyContainer>}

      {isopen && (
        <DropdownContainer>
          <VContainer>
            <SHContainer onClick={handleEdit} style={{ cursor: 'pointer' }}>
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

              <div>Edit</div>
            </SHContainer>
            <SHContainer
              style={{ cursor: 'pointer' }}
              onClick={() => handleCopy(link)}
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
                  d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                />
              </svg>

              <div>Copy</div>
            </SHContainer>
            <SHContainer
              style={{
                cursor: 'pointer',
                color: '#ff464f',
              }}
              onClick={() => {
                removeLecture(dataid)
                handleOpen()
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
              <div>Delete</div>
            </SHContainer>
          </VContainer>
        </DropdownContainer>
      )}
    </div>
  )
}

const ListElement = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      {isEditing ? (
        <EditTemplate
          lecture={props.title}
          lecturelink={props.link}
          onedit={setIsEditing}
          dataid={props.dataid}
          type='edit'
        />
      ) : (
        <ViewTemplate
          lecture={props.title}
          link={props.link}
          onedit={setIsEditing}
          dataid={props.dataid}
        />
      )}
    </div>
  )
}

function List(props) {
  const [isAdding, setIsAdding] = useState(false)

  const ListItems = props.items.map((elem, index) => {
    return (
      <ListItem key={index}>
        <ListElement title={elem.title} link={elem.link} dataid={elem._id} />
      </ListItem>
    )
  })

  return (
    <div>
      <HeadingText>Lectures</HeadingText>
      <ListComponent>
        {ListItems}
        {isAdding ? (
          <ListItem>
            <EditTemplate
              lecture=''
              lecturelink=''
              onedit={setIsAdding}
              type='add'
            />
          </ListItem>
        ) : (
          <AddButton onClick={() => setIsAdding(true)}>
            Add Lecture &nbsp; +{' '}
          </AddButton>
        )}
      </ListComponent>
    </div>
  )
}

export default List
