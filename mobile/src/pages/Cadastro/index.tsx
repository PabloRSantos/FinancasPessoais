import React, { useState } from 'react'
import ButtonComponent from '../../components/Button'
import InputComponent from '../../components/Input'

import { useAuth } from '../../contexts/auth'

import { Container, TextTop, Title, Span, Form } from './styles'

const Cadastro: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

  const { SignUp } = useAuth()

  const submitForm = async () => {
    const data = {
      name,
      email,
      password
    }

    SignUp(data)
  }

  return (
    <Container>
      <TextTop>
        <Title>
          Crie sua {'\n'}conta gratuíta
        </Title>
        <Span>
          Basta preencher esses dados{'\n'}e você estará conosco
        </Span>
      </TextTop>

      <Form>
        <InputComponent
          placeholder='Nome'
          nameIcon='user'
          classInput='first'
          value={name}
          onChangeText={text => setName(text)}/>

        <InputComponent
          placeholder='Email'
          nameIcon='envelope'
          classInput='middle'
          value={email}
          onChangeText={text => setEmail(text)}/>

        <InputComponent
          placeholder='Senha'
          nameIcon='lock'
          classInput='middle'
          value={password}
          onChangeText={text => setPassword(text)}/>

        <InputComponent
          placeholder='Sua senha novamente'
          nameIcon='lock'
          classInput='last'
          value={passwordAgain}
          onChangeText={text => setPasswordAgain(text)}/>

        <ButtonComponent
          text='Cadastrar'
          active={false}
          onPress={submitForm}/>
      </Form>

    </Container>
  )
}

export default Cadastro
