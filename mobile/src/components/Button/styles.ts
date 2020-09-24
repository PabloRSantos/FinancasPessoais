import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

interface ContainerProps {
    active: Boolean
}

export const Container = styled(RectButton)<ContainerProps>`
    background-color: ${props => props.active ? '#109D57' : props.theme.colors.disabled};
    width: 100%;
    height: 60px;
    border-radius: 8px;

    margin-top: 15px;

    align-items: center;
    justify-content: center;
`

export const Text = styled.Text`
    font-family: 'Archivo-Bold';
    color: white;
    font-size: 16px;
`
