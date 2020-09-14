import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './src/routes'
import ThemeContext from './src/contexts/themes'

import { ApolloProvider } from '@apollo/client'
import client from './src/services/clientGraphql'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeContext>
        <StatusBar barStyle="light-content" backgroundColor='#0098F6'/>
        <Routes />
      </ThemeContext>
    </ApolloProvider>

  )
}

export default App
