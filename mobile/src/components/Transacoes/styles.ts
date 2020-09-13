import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 15px 0;
`

export const LeftSide = styled.View`
    flex-direction: row;
    align-items: center;
`

export const IconCategoria = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.primary};

    margin-right: 15px;

`

export const TextCategoria = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Name = styled.Text`
    color: ${props => props.theme.colors.textInWhite};
    font-size: 13px;
    font-family: 'Poppins-Medium';
`

export const Data = styled.Text`
    color: ${props => props.theme.colors.textInWhite};
    font-size: 10px;
    font-family: 'Poppins-Regular';
`

export const RightSide = styled.View`
`

export const ContentValue = styled.View`
    height: 25px;
    min-width: 50px;
    border-radius: 15px;
    background-color: #F52E2B;

    align-items: center;
    justify-content: center;
`

export const Value = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: 10px;
    font-family: 'Poppins-Bold';
`
