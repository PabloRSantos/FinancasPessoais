import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabs from './HomeTabs'

const { Navigator, Screen } = createStackNavigator()

function AuthStack () {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={HomeTabs}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AuthStack
