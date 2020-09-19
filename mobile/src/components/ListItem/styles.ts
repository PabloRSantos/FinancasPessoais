import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

interface CircleProps {
    selected: boolean
}

export const Container = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

    width: 100%;

    padding: 15px 5px;
    border-top-width: 1px;
    border-color: ${props => props.theme.colors.disabled};
`

export const Item = styled(BorderlessButton)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    flex: 1;

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

export const Circle = styled.View<CircleProps>`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props => props.selected ? props.theme.colors.primary : 'transparent'};
`
