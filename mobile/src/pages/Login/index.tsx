import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  LogoSvg,
  LoginContainer,
  TopText,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  SpanCadastro,
  SpanCadastroText
} from './styles'

import InputComponent from '../../components/Input'
import ButtonComponent from '../../components/Button'
import { useAuth } from '../../contexts/auth/auth'

const Login: React.FC = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { SignIn } = useAuth()

  const SubmitForm = () => {
    SignIn({ email, password })
  }

  return (
    <Container>
      <LogoSvg />
      <LoginContainer>
        <TopText>
          <Title>Fazer login</Title>
          <SpanCadastro onPress={() => navigation.navigate('Cadastro')}>
            <SpanCadastroText>
              Criar uma conta
            </SpanCadastroText>
          </SpanCadastro>
        </TopText>

        <InputComponent
          classInput='first'
          nameIcon='envelope'
          placeholder='Email'
          onChangeText={ text => setEmail(text)}/>

        <InputComponent
          classInput='last'
          nameIcon='lock'
          placeholder='Senha'
          secureTextEntry={true}
          onChangeText={ text => setPassword(text)}/>

        <ForgotPassword onPress={() => navigation.navigate('ForgotPassword')}>
          <ForgotPasswordText>
            Esqueci minha senha
          </ForgotPasswordText>
        </ForgotPassword>

        <ButtonComponent active={true} style={{ backgroundColor: '#109D57' }} text='Entrar' onPress={SubmitForm}/>

      </LoginContainer>
    </Container>
  )
}

export default Login
