import React from 'react'
import { BaseButtonProperties } from 'react-native-gesture-handler'

import { Container, Value } from './styles'

interface ICalcButtonProps extends BaseButtonProperties {
  title: string,
}

const CalcButtonComponent: React.FC<ICalcButtonProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Value>
        {title}
      </Value>
    </Container>
  )
}

export default CalcButtonComponent
