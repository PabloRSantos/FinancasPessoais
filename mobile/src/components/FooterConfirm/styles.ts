import styled from 'styled-components/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    height: 60px;

    align-items: center;
`

export const Button = styled(RectButton)`
    width: 70px;
    height: 70px;
    border-radius: 45px;
    background-color: ${props => props.theme.colors.darkPrimary};

    align-items: center;
    justify-content: center;

    margin-top: -20px;

`

export const Icon = styled(FontAwesome).attrs({
  size: 25,
  color: 'white',
  name: 'check'
})`

`
