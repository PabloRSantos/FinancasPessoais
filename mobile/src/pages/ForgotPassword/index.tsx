import React from 'react'
import ButtonComponent from '../../components/Button'
import InputComponent from '../../components/Input'

import { Container, Form, Title, Span, LogoSvg } from './styles'

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <LogoSvg />
      <Form>
        <Title>Esqueceu sua senha?</Title>
        <Span>
            Vamos dar um jeito nisso
        </Span>
        <InputComponent classInput='unique' nameIcon='envelope' placeholder='Email'/>
        <ButtonComponent active={true} style={{ backgroundColor: '#109D57' }} text='Confirmar'/>
      </Form>
    </Container>
  )
}

export default ForgotPassword
