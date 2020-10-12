import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabs from './HomeTabs'
import Categorias from '../pages/Categorias'
import Add from '../pages/Add'
import SeeMore from '../pages/SeeMore'

const { Navigator, Screen } = createStackNavigator()

function AppStack () {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="HomeTabs" component={HomeTabs}/>
        <Screen name="Categorias" component={Categorias}/>
        <Screen name="SeeMore" component={SeeMore}/>
        <Screen name="Add" component={Add}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
