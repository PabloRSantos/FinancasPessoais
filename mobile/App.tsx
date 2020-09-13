import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './src/routes'
import ThemeContext from './src/contexts/themes'

const App = () => {
  return (
    <ThemeContext>
      <StatusBar barStyle="light-content" backgroundColor='#0098F6'/>
      <Routes />
    </ThemeContext>
  )
}

export default App
