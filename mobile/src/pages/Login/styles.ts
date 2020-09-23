import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import Logo from '../../../assets/svgs/Logo.svg'

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding'
})`
    flex: 1;
    background-color: #0098F6;

    padding: 0 25px;

    align-items: flex-start;
    justify-content: center;
`

export const LogoSvg = styled(Logo).attrs({
  height: 150,
  width: 150
})`
    align-self: center;
    margin-bottom: 30px;
`

export const LoginContainer = styled.View`
    width: 100%;
`

export const TopText = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-family: 'Poppins-SemiBold';
    color: white;
    font-size: 26px;

    margin-bottom: 15px;
`

export const SpanCadastro = styled(BorderlessButton)`
`

export const SpanCadastroText = styled.Text`
    font-size: 13px;
    font-family: 'Poppins-Regular';
    color: ${props => props.theme.colors.cinza};
`

export const ForgotPassword = styled(BorderlessButton)`
    margin-top: 5px;
`

export const ForgotPasswordText = styled.Text`
    align-self: flex-end;
    color: ${props => props.theme.colors.cinza};
    font-size: 13px;
    font-family: 'Poppins-Regular';
`
