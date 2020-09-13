import React from 'react'

import { Container, Text } from './styles'
import { RectButtonProperties } from 'react-native-gesture-handler'

interface ButtonProps extends RectButtonProperties{
  text: String,
  active: Boolean
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, active, ...rest }) => {
  return (
    <Container active={active} {...rest}>
      <Text>
        {text}
      </Text>
    </Container>
  )
}

export default ButtonComponent
