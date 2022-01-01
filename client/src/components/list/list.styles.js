import styled from 'styled-components'

export const HeadingText = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.activeText};
  text-align: center;
  padding-top: 1.4rem;
  font-size: 1.2rem;
`

export const ListComponent = styled.div`
  background-color: ${(props) => props.theme.background};
  display: flex;
  // flex: 1;
  align-items: center;
  flex-direction: column;
  padding: 3rem 7rem;
  overflow: hidden;
`

export const ListItem = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.card};
  color: ${(props) => props.theme.primarytext};
  padding: 0.6rem 0.8rem 0.6rem 1.7rem;
  border-radius: 0.4rem;
  margin-bottom: 0.7rem;
  text-decoration: none;
  border-left: 6px solid ${(props) => props.theme.startingcolor};
  &:hover {
    color: ${(props) => props.theme.primarytext};
    background-color: ${(props) => props.theme.cardHover};
    box-shadow: 0 2px 1px #2222;
  }
`

export const HContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`
export const SHContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  border-radius: 0.6rem;
  padding: 0.1rem 0.7rem;
  &:hover {
    color: ${(props) => props.theme.primarytext};
    background-color: ${(props) => props.theme.cardHover};
  }
`
export const IHContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const VContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ComponentName = styled.div`
  text-align: left;
  font-size: 18px;
  font-weight: 600;
`
export const ComponentLink = styled.div`
  margin-top: 0.5rem;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  color: ${(props) => props.theme.secondarytext};
`
export const ComponentButton = styled.button`
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.action};
  color: ${(props) => props.theme.primarytext};
  padding: 0.8rem 1.6rem;
  border-radius: 5px;
  align-self: center;
  font-size: 16px;
  cursor: pointer;
`
export const JoinLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const SVG = styled.svg`
  height: 1.2em;
  cursor: pointer;
`
export const DropdownContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: calc(100% + 2.1rem);
  margin-top: 2rem;
  // width: 5.9rem;
  padding: 0.5rem 0.3rem 0.4rem 0.3rem;
  background-color: ${(props) => props.theme.card};
  box-shadow: 0 2px 5px ${(props) => props.theme.shadowColor};
  border-radius: 0.6rem;
  line-height: 2;
  z-index: 2;
`
export const Input = styled.input`
  background-color: ${(props) => props.theme.activebox};
  color: ${(props) => props.theme.activeText};
  border: none;
  outline: none;
  padding: 0.6rem 0.9rem;
  margin-bottom: 0.3rem;
  border-radius: 5px;
  font-family: inherit;
`

export const CopyContainer = styled.div`
  margin-top: 0.2rem;
  display: block;
  width: 3.5rem;
  border-radius: 0.3rem;
  padding: 0.3rem 0.5rem;
  background-color: ${(props) => props.theme.action};
  color: ${(props) => props.theme.primarytext};
`

export const AddButton = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  background-color: ${(props) => props.theme.card};
  padding: 0.5rem 0.8rem;
  border-radius: 0.4rem;
  color: ${(props) => props.theme.secondarytext};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.cardHover};
  }
`
