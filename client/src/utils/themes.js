import React from 'react'
import { ThemeProvider } from 'styled-components'

export const theme = {
  light: {
    background: '#fefefe',
    card: '#edf1fa',
    cardHover: '#e4e9f3',
    primarytext: '#1a3b34',
    secondarytext: '#899a96',
    action: '#3dd598',
    actionhover: '#25c685',
    activebox: '#b6bbc7',
    activeText: '1a3b34',
    shadowColor: '#899a96',
    startingcolor: '#ff8a34',
  },
  dark: {
    background: '#22343c',
    card: '#30444e',
    cardHover: '#475e69',
    primarytext: '#fefefe',
    secondarytext: '#96a7af',
    action: '#3dd598',
    actionhover: '#25c685',
    activebox: '#1a282f',
    activeText: '#ededed',
    shadowColor: '#222222',
    startingcolor: '#f36f47',
  },
}

const Theme = ({ children, activeTheme }) => (
  <ThemeProvider theme={theme[activeTheme]}>{children}</ThemeProvider>
)

export default Theme
