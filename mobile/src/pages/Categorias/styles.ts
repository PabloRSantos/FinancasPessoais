import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
    padding: 0 25px 25px;
`
export const ContentTitle = styled.View`
    height: 80px;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 21px;
    font-family: 'Poppins-Medium';
    color: ${props => props.theme.colors.textInWhite};

`

export const Lista = styled.FlatList`
    width: 100%;
    border-bottom-width: 1px;
    border-color: ${props => props.theme.colors.disabled};
`
