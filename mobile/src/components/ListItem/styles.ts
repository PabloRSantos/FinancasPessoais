import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
   
    width: 100%;

    padding: 15px 0;
    border-top-width: 1px;
    border-color: ${props => props.theme.colors.disabled};
`

export const Item = styled(BorderlessButton)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const Icon = styled.View`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.blue};

    margin-right: 5px;
`

export const Name = styled.Text`
    color: ${props => props.theme.colors.textInWhite};
    font-size: 16px;
    font-family: 'Poppins-Medium';
`
