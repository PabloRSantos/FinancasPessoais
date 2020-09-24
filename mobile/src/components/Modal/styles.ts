import { BorderlessButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;

    z-index: 10;

`

export const Background = styled(BorderlessButton)`
    flex: 1;
`

export const Modal = styled.View`
    flex: 4;
    background-color: ${props => props.theme.colors.white};

    margin: 0 15px;
    padding: 15px;

    border-radius: 8px;

    align-items: center;
`

export const Title = styled.Text`
    font-size: 16px;
    font-family: 'Poppins-Bold';
    color: ${props => props.theme.colors.primary};
    margin-bottom: 15px;
`

export const Lista = styled.ScrollView`
    width: 100%;
    padding: 0 10px;
`
