import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { useMutation } from '@apollo/client'
import queries from './queries'

export interface ISignIn {
    email: string,
    password: string,
}

interface ISignUp {
    email: string,
    password: string,
    name: string,
}

interface Context {
    signed: boolean,
    SignIn: (loginData: ISignIn) => void
    SignUp: (registerData: ISignUp) => void
    SignOut: () => void
}

const AuthContext = createContext<Context>({
  signed: false,
  SignIn: () => {},
  SignUp: () => {},
  SignOut: () => {}
})

export const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState(false)
  const [signUpMutation] = useMutation(queries.SignUp)
  const [signInMutation] = useMutation(queries.SignIn)
  // const { data, error, loading } = useQuery(queries.GetUser)

  useEffect(() => {
    async function loadDatas () {
      const token = await AsyncStorage.getItem('@Financas/token')

      if (!token) {
        setSigned(true)
      }
    }

    loadDatas()
  }, [])

  const SignIn = async (loginData: ISignIn) => {
    try {
      const { data } = await signInMutation({
        variables: {
          email: loginData.email,
          password: loginData.password
        }
      })

      if (data.login.token) {
        await AsyncStorage.setItem('@Financas/token', data.login.token)
        setSigned(true)

        return
      }

      // return data
    } catch (e) {
      console.log(e)
    }
  }

  const SignUp = async (registerData: ISignUp) => {
    try {
      const { data } = await signUpMutation({
        variables: {
          name: registerData.name,
          email: registerData.email,
          password: registerData.password
        }
      })

      if (data.cadastro.token) {
        await AsyncStorage.setItem('@Financas/token', data.cadastro.token)
        setSigned(true)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const SignOut = () => {
    AsyncStorage.removeItem('@Financas/token')
  }

  return (
    <AuthContext.Provider value={{ signed, SignIn, SignUp, SignOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const context = useContext(AuthContext)

  return context
}
