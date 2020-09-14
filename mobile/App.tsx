import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './src/routes'

import ThemeProvider from './src/contexts/themes'

import { AuthProvider } from './src/contexts/auth'

import { ApolloProvider } from '@apollo/client'
import client from './src/services/clientGraphql'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeProvider>
          <StatusBar barStyle="light-content" backgroundColor='#0098F6'/>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>

  )
}

export default App
