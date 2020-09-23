import styled from 'styled-components/native'
import { PieChart } from 'react-native-svg-charts'
import { BorderlessButton } from 'react-native-gesture-handler'

interface IconProps {
    color: string
}

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 15px;
    width: 100%;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    margin: 10px 0;
`

export const Categorias = styled.View`

`

export const Items = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
`

export const Icon = styled.View<IconProps>`
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: ${props => props.color};
`

export const Name = styled.Text`
    color: ${props => props.theme.colors.textInWhite};
    font-size: 10px;
    font-family: 'Poppins-Medium';
    margin-left: 5px;

`

export const RightSide = styled.View`
    align-items: center;
    justify-content: center;
`

export const Grafico = styled(PieChart)`
    width: 200px;
    height: 200px;
`

export const SpanButton = styled(BorderlessButton)`
    margin-top: 15px;
`

export const Span = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-size: 10px;
    font-family: 'Poppins-Medium';
`
