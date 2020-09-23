import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding'
})`
    flex: 1;
    background-color: ${props => props.theme.colors.blue};
    padding: 0 25px;
`

export const TextTop = styled.View`
    flex: 1;
    justify-content: center;
`

export const Title = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 34px;
    color: ${props => props.theme.colors.white};
`

export const Span = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 13px;
    color: ${props => props.theme.colors.cinza};
`

export const Form = styled.View`
    flex: 1.8;
`
