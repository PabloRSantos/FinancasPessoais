import styled, { css } from 'styled-components/native'

import Icon from 'react-native-vector-icons/FontAwesome'

interface InputProps {
    classInput: string
}

export const Container = styled.View`
    width: 100%;
`

export const InputContainer = styled.View`
    width: 100%;
`

export const Label = styled.Text`
  font-size: 12px;
  font-family: 'Poppin-Medium';
  color: ${props => props.theme.colors.textInWhite};
  opacity: .6;
`

export const Input = styled.TextInput<InputProps>`
    width: 100%;
    height: 60px;
    padding-left: 40px;

    background-color: white;
    position: relative;

    border-color: ${props => props.theme.colors.cinza};
    border-width: 1px;

  ${props => props.classInput === 'first' && css`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  `}

  ${props => props.classInput === 'last' && css`
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  `}

  ${props => props.classInput === 'unique' && css`
    border-radius: 8px;
  `}

`

export const Icone = styled(Icon).attrs({
  size: 20
})`
    position: absolute;
    top: 18px;
    left: 12px;
    z-index: 10;
    color: ${props => props.theme.colors.primary};
`
