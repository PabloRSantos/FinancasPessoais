import React from 'react'
import { BorderlessButtonProperties } from 'react-native-gesture-handler'

import { Container, Button, Icon } from './styles'

const FooterConfirm: React.FC<BorderlessButtonProperties> = (props) => {
  return (
    <Container>
      <Button {...props}>
        <Icon />
      </Button>
    </Container>
  )
}

export default FooterConfirm
