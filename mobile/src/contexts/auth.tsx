import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { gql, useMutation } from '@apollo/client'

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

  useEffect(() => {
    async function loadDatas () {
      const token = await AsyncStorage.getItem('@Financas/token')

      if (token) {
        setSigned(true)
      }
    }

    loadDatas()
  })

  const SignIn = (loginData: ISignIn) => {
    try {
      const LoginMutation = gql`
            Login(email: $email, password: $password){
                token
            }
        `

      const data = useMutation(LoginMutation, {
        variables: {
          email: loginData.email,
          password: loginData.password
        }
      })

      console.log(data)

      //   if (data.token) {
      //     loginData.remember && await AsyncStorage.setItem('@Proffy/token', data.token)
      //     setUser(true)
      //     api.defaults.headers.authorization = `Bearer ${data.token}`
      //   }

      //   if (data.message) { alert(data.message) }

    //   return data
    } catch (e) {
      console.log(e)
    }
  }

  const SignUp = (registerData: ISignUp) => {
    const RegisterMutation = gql`
    Cadastro(user: $registerData){
        token
    }
`

    const data = useMutation(RegisterMutation, {
      variables: {
        registerData: registerData
      }
    })

    console.log(data)
  }

  const SignOut = () => {

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
