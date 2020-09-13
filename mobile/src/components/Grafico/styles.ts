import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;

    padding: 30px 15px;
`

export const Categorias = styled.View`
`

export const Items = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
`

export const Icon = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: ${props => props.theme.colors.primary};
`

export const Name = styled.Text`
    color: ${props => props.theme.colors.textInWhite};
    font-size: 10px;
    font-family: 'Poppins-Medium';
    margin-left: 5px;

`

export const RightSide = styled.View`
`

export const Grafico = styled.View`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: ${props => props.theme.colors.primary};
`
