import styled from 'styled-components/native'

export const Container = styled.View`
     width: 100%;
    padding: 0 15px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    margin: 10px 0;
`

export const Item = styled.View`
    flex-direction: row;
    width: 100%;

    justify-content: space-between;
    align-items: center;

    margin: 15px 0;
`

export const LeftSide = styled.View`
    flex-direction: row;
    align-items: center;

`

export const Icon = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;

    margin-right: 8px;

    background-color: ${props => props.theme.colors.primary};
`

export const Name = styled.Text`
    color: ${props => props.theme.colors.textInWhite};
    font-size: 13px;
    font-family: 'Archivo-Medium';

    max-width: 70%;
`

export const RightSide = styled.View`
`

export const Value = styled.Text`
    color: ${props => props.theme.colors.blue};
    font-size: 13px;
    font-family: 'Poppins-SemiBold';
`
