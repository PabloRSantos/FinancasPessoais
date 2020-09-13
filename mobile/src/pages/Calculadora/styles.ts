import styled from 'styled-components/native'

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
