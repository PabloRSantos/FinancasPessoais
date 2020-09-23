import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

interface ValueProps {
    isNegative: Boolean
}

export const Container = styled.View`
    width: 100%;
    padding: 25px 15px 15px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    margin: 10px 0;
`

export const Title = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
    font-family: 'Poppins-Bold';
    text-align: center;
`

export const Item = styled(BorderlessButton)`
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
    font-size: 8px;
    font-family: 'Poppins-Regular';
`

export const RightSide = styled.View`
`

export const Value = styled.Text<ValueProps>`
    font-size: 10px;
    font-family: 'Poppins-Bold';
    color: ${props => props.isNegative ? '#F52E2B' : '#109D57'};

`
