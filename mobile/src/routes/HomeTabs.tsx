import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Profile from '../pages/Profile'
import Home from '../pages/Home'

import { Ionicons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator()

interface tabBarIconProps {
    color: string,
    size: number,
    focused: boolean
}

function StudyTabs () {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 56
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16
        },
        inactiveBackgroundColor: '#C6C4C4',
        activeBackgroundColor: '#C6C4C4',
        inactiveTintColor: '#C6C4C4',
        activeTintColor: '#0098F6'
      }}
    >
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size, focused }: tabBarIconProps) =>
            <Ionicons
              name="ios-easel"
              size={size}
              color={focused ? '#0098F6' : color}/>
        }}
      />

      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }: tabBarIconProps) =>
            <Ionicons
              name="ios-heart"
              size={size}
              color={focused ? '#0098F6' : color} />
        }}
      />
    </Navigator>
  )
}

export default StudyTabs
