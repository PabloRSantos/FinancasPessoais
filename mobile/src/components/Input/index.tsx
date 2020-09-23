import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, InputContainer, Input, Icone, Label } from './styles'

// lock user envelope

interface IInputComponentProps extends TextInputProps{
  nameIcon: string,
  classInput: string,
  label?: string
}

const InputComponent: React.FC<IInputComponentProps> = ({ nameIcon, classInput, label, ...rest }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputContainer>
        <Icone name={nameIcon}/>
        <Input classInput={classInput} {...rest}/>
      </InputContainer>
    </Container>
  )
}

export default InputComponent
