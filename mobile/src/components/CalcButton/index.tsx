import React from 'react'
import { BaseButtonProperties } from 'react-native-gesture-handler'

import { Container, Value, Icon } from './styles'

interface ICalcButtonProps extends BaseButtonProperties {
  title?: string,
  icon?: string
}

const CalcButtonComponent: React.FC<ICalcButtonProps> = ({ title, icon, ...rest }) => {
  return (
    <Container isConfirmButton={!!icon} {...rest}>
      {title ? (
        <Value>
          {title}
        </Value>
      ) : (
        <Icon name={icon as string}/>
      )}

    </Container>
  )
}

export default CalcButtonComponent
