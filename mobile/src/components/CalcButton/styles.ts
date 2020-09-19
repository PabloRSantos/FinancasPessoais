import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface ContainerProps {
  isConfirmButton: boolean
}

export const Container = styled(RectButton)<ContainerProps>`
    width: 65px;
    height: 65px;
    border-radius: 32.5px;

    background-color: ${props => props.isConfirmButton
      ? props.theme.colors.primary
      : props.theme.colors.white};

    align-items: center;
    justify-content: center;
`

export const Value = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-size: 30px;
    font-family: 'Archivo-Bold';
`
export const Icon = styled(FontAwesome).attrs({
  size: 20,
  color: 'white'
})`

`
