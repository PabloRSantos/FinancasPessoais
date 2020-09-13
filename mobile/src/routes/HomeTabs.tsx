import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Profile from '../pages/Profile'
import Home from '../pages/Home'

import Icon from 'react-native-vector-icons/FontAwesome'

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
          height: 60
        },
        tabStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'Archivo-Bold',
          fontSize: 13
        },
        inactiveBackgroundColor: 'white',
        activeBackgroundColor: 'white',
        inactiveTintColor: '#C6C4C4',
        activeTintColor: '#0098F6'
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }: tabBarIconProps) =>
            <Icon
              name="home"
              size={size}
              color={focused ? '#0098F6' : color} />
        }}
      />
      <Screen
        name="More"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }: tabBarIconProps) =>
            <Icon
              style={{ marginTop: 10 }}
              name="close"
              size={size}
              color={focused ? '#0098F6' : color} />
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size, focused }: tabBarIconProps) =>
            <Icon
              name="user"
              size={size}
              color={focused ? '#0098F6' : color}/>
        }}
      />
    </Navigator>
  )
}

export default StudyTabs
