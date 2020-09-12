import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'

const { Navigator, Screen } = createStackNavigator()

function AuthStack () {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AuthStack
