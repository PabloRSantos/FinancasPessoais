import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, Input, Icone } from './styles'

// lock user envelope

interface IInputComponentProps extends TextInputProps{
  nameIcon: string,
  classInput: string,
}

const InputComponent: React.FC<IInputComponentProps> = ({ nameIcon, classInput, ...rest }) => {
  return (
    <Container>
      <Icone name={nameIcon}/>
      <Input classInput={classInput} {...rest}/>
    </Container>
  )
}

export default InputComponent
