import styled from 'styled-components'

export const ScheduleList = styled.div`
  color: ${(props) => props.theme.primarytext};
  background-color: ${(props) => props.theme.background};
  padding: 3rem 5rem;
`

export const ScheduleItem = styled.div`
  // background-color: #5f5f5f;
  background-color: ${(props) => props.theme.card};
  border-radius: 0.5rem;
  margin-bottom: 20px;
  padding: 10px 20px;
  position: relative;
`
export const DayContainer = styled.div`
  background-color: #1e2f2f;
  text-aligm: center;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 0;
  top: 50%;
  padding: 5px 10px;
  border-radius: 0.4rem;
`
export const TimeContainer = styled.div`
  background-color: #4e4f4f;
  margin-left: 1.2rem;
  display: flex;
  flex-direction: column;
  padding: 2px 10px;
  border-radius: 0.4rem;
`
export const LectureContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 1.8rem 2rem;
  border-radius: 0.4rem;
  margin-top: 10px;
`
export const LectureWrapper = styled.div`
  padding: 0.7rem 0.8rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.card};
  // background-color: #9f9f9f;
  margin-bottom: 0.3rem;
  &:hover {
    // background-color: #7d8f9f;
    background-color: ${(props) => props.theme.cardHover};
  }
`

export const Container = styled.div`
  background-color: #3f8f9f;
  padding: 0.7rem 3rem;
  border: 2px solid black;
  margin-bottom: 5px;
  display: flex;
`
