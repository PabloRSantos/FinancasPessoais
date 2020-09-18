import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Profile from '../pages/Profile'
import Home from '../pages/Home'
import Calculadora from '../pages/Calculadora'

import { useTheme } from '../contexts/themes'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

const { Navigator, Screen } = createBottomTabNavigator()

export interface tabBarIconProps {
    color: string,
    size: number,
    focused: boolean
}

function HomeTabs () {
  const { theme } = useTheme()
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
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          minWidth: 20,
          minHeight: 20
        },
        labelStyle: {
          fontFamily: 'Archivo-Bold',
          fontSize: 13
        },
        inactiveBackgroundColor: 'white',
        activeBackgroundColor: 'white',
        activeTintColor: theme.colors.primary,
        inactiveTintColor: '#C6C4C4'
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }: tabBarIconProps) =>
            <FontAwesome
              name="home"
              size={30}
              color={focused ? color : '#C6C4C4'}
            />
        }}
      />
      <Screen
        name="Calculadora"
        component={Calculadora}
        options={{
          tabBarLabel: '',
          tabBarVisible: false,
          tabBarIcon: ({ focused, color }: tabBarIconProps) =>
            <FontAwesome
              style={{ marginTop: 10 }}
              name="plus-circle"
              size={50}
              color={focused ? color : '#C6C4C4'}
            />
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused, color }: tabBarIconProps) =>
            <FontAwesome
              name="user"
              size={20}
              color={focused ? color : '#C6C4C4'}/>
        }}
      />
    </Navigator>
  )
}

export default HomeTabs
