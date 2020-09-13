import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
    width: 65px;
    height: 65px;
    border-radius: 32.5px;

    background-color: ${props => props.theme.colors.white};

    align-items: center;
    justify-content: center;
`

export const Value = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-size: 30px;
    font-family: 'Archivo-Bold';
`
