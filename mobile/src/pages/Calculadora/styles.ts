import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

interface ITabText {
    active: boolean
}

export const Container = styled.View`
    flex: 1;
    align-items: center;
`

export const Header = styled.View`
    height: 150px;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    padding: 0 25px;

    align-items: flex-end;
    justify-content: center;
`

export const Value = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 30px;
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

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 64px;
    width: 100%;

    background-color: ${props => props.theme.colors.white};
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
    font-size: 13px;
    color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.disabled};
`
