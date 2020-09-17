import React from 'react'

import ThemeProvider from './themes'
import { AuthProvider } from './auth/auth'
import { TransacaoProvider } from './transacoes/index'
import { ApolloProvider } from '@apollo/client'

import client from '../services/clientGraphql'

const Contexts: React.FC = ({ children }) => (
  <ApolloProvider client={client}>
    <AuthProvider>
      <TransacaoProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </TransacaoProvider>
    </AuthProvider>
  </ApolloProvider>
)

export default Contexts
