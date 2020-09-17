import React from 'react'
import { StatusBar } from 'react-native'

import AuthStack from './AuthStack'
import AppStack from './AppStack'

import { useAuth } from '../contexts/auth/auth'
import { useTheme } from '../contexts/themes'

const Routes = () => {
  const { signed } = useAuth()
  const { theme } = useTheme()

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary}/>
      {signed ? <AppStack /> : <AuthStack />}
    </>
  )
}

export default Routes
