import React from 'react'
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

const Login: React.FC = () => {
  const navigation = useNavigation()

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
        <InputComponent classInput='first' nameIcon='envelope' placeholder='Email'/>
        <InputComponent classInput='last' nameIcon='lock' placeholder='Senha'/>
        <ForgotPassword onPress={() => navigation.navigate('ForgotPassword')}>
          <ForgotPasswordText>
            Esqueci minha senha
          </ForgotPasswordText>
        </ForgotPassword>
        <ButtonComponent active={true} text='Entrar'/>
      </LoginContainer>
    </Container>
  )
}

export default Login
