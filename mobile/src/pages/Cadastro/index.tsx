import React from 'react'
import ButtonComponent from '../../components/Button'
import InputComponent from '../../components/Input'

import { Container, TextTop, Title, Span, Form } from './styles'

const Cadastro: React.FC = () => {
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
        <InputComponent placeholder='Nome' nameIcon='user' classInput='first'/>
        <InputComponent placeholder='Email' nameIcon='envelope' classInput='middle'/>
        <InputComponent placeholder='Senha' nameIcon='lock' classInput='middle'/>
        <InputComponent placeholder='Sua senha novamente' nameIcon='lock' classInput='last'/>
        <ButtonComponent text='Cadastrar' active={false}/>
      </Form>

    </Container>
  )
}

export default Cadastro
