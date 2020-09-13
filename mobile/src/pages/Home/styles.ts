import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`

export const ContainerFlatList = styled.View`
    width: 100%;
    padding: 0 25px;
`

export const ContainerFlatItems = styled.View`
    width: 100%;
    padding: 0 15px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;

    margin: 10px 0;
`
