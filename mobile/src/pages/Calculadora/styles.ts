import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

interface ITabText {
    active: boolean
}

interface ICircleProps {
    active: boolean
}

export const Container = styled.View`
    flex: 1;
    align-items: center;
`

export const Header = styled.View`
    height: 100px;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    padding: 0 25px;

    align-items: flex-end;
    justify-content: center;
`

export const Value = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 30px;
    flex: 1;
    margin-top: 10px;
    color: ${props => props.theme.colors.white};
`

export const Buttons = styled.View`
   flex: 1;
   max-width: 100%;
   padding: 20px 40px;

   justify-content: space-between;
`

export const ButtonBlock = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;

`

export const TabTop = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 64px;
    width: 100%;

    background-color: ${props => props.theme.colors.primary};

`
export const TabItem = styled(BorderlessButton)`
    padding: 0 15%;
    width: 50%;
    height: 100%;

    align-items: center;
    justify-content: center;
`

export const TabText = styled.Text<ITabText>`
    font-family: 'Archivo-Bold';
    font-size: 12px;
    color: ${props => props.active ? props.theme.colors.white : props.theme.colors.disabled};
`

export const Circle = styled.View<ICircleProps>`
    width: 5px;
    height: 5px;
    border-radius: 2.5px;
    background-color: ${props => props.theme.colors.white};
    margin-top: 3px;

    opacity: ${props => props.active ? 1 : 0};
`
