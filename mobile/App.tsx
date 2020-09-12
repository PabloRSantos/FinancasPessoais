import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './src/routes'
import ThemeContext from './src/contexts/themes'

const App = () => {
  return (
    <ThemeContext>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </ThemeContext>
  )
}

export default App
