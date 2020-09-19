import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabs from './HomeTabs'
import Calculadora from '../pages/Calculadora'
import Categorias from '../pages/Categorias'
import Add from '../pages/Add'

const { Navigator, Screen } = createStackNavigator()

function AppStack () {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="HomeTabs" component={HomeTabs}/>
        <Screen name="Categorias" component={Categorias}/>
        <Screen name="Calculadora" component={Calculadora}/>
        <Screen name="Add" component={Add}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
