import React from 'react'
import { TextInputProps } from 'react-native'
import { Container, Label, InputContainer, Icon, Input } from './styles'

interface CardInfosProps extends TextInputProps {
  label?: string,
  icon: string,
}

const CardInfos: React.FC<CardInfosProps> = ({ label, icon, ...rest }) => {
  return (
    <Container>
      {label && (
        <Label>
          {label}
        </Label>
      )}
      <InputContainer>
        <Icon name={icon}/>
        <Input {...rest} editable={false}/>
      </InputContainer>
    </Container>
  )
}

export default CardInfos
