import styled from 'styled-components/native'
import Logo from '../../../assets/svgs/Logo.svg'

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.blue};
    padding: 0 25px;

    justify-content: center;
`

export const LogoSvg = styled(Logo).attrs({
  height: 150,
  width: 150
})`
    align-self: center;
    margin-bottom: 60px;

`

export const Form = styled.View`
    justify-content: center;
`

export const Title = styled.Text`
    font-family: 'Poppins-SemiBold';
    color: white;
    font-size: 26px;
`

export const Span = styled.Text`
    font-size: 13px;
    font-family: 'Poppins-Regular';
    color: ${props => props.theme.colors.cinza};
    margin-bottom: 15px;
`
