import styled from 'styled-components/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const Container = styled.View`
    height: 65%;
    padding: 25px 15px 15px;
    margin: 15px 0;
    background-color: ${props => props.theme.colors.white};

    align-items: center;
`

export const Icon = styled(AntDesign).attrs({
  size: 60,
  name: 'dislike2'
})`
    color: ${props => props.theme.colors.primary};
    margin-bottom: 10px;
`

export const Title = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
    font-family: 'Poppins-Bold';
    text-align: center;
`

export const Span = styled.Text`
  color: ${props => props.theme.colors.textInWhite};
    font-size: 13px;
    font-family: 'Poppins-Medium';
    margin-bottom: 10px;
`

export const ArrowBody = styled.View`
    flex: 1;
    width: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: ${props => props.theme.colors.primary};
`

export const Arrow = styled(AntDesign).attrs({
  size: 45,
  name: 'arrowdown'
})`
    color: ${props => props.theme.colors.primary};
    margin-top: -10px;
`
