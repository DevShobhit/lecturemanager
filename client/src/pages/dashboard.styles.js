import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  flex-wrap: wrap;
  justify-content: space-between;
`

export const TopBar = styled.div`
  padding: 1rem 3rem;
  position: sticky;
  background-color: ${(props) => props.theme.card};
  color: ${(props) => props.theme.activeText};
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 0.1rem 0.4rem ${(props) => props.theme.shadowColor};
  top: 0;
  left: 0;
  z-index: 1;
`
export const Wrapper = styled.div`
  flex: 1;
`
