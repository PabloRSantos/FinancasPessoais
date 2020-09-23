import styled from 'styled-components/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.ScrollView`
    flex: 1;
`

export const Title = styled.Text`
    font-size: 18px;
    font-family: 'Poppins-Bold';
    color: ${props => props.theme.colors.blue};
    text-align: center;
`

export const CardContainer = styled.View`
    background-color: ${props => props.theme.colors.white};
    padding: 25px;
    margin: 15px 0;

`

export const Top = styled.View`
    align-items: center;
    margin-bottom: 40px;
`

export const IconBig = styled(FontAwesome5).attrs({
  size: 60,
  color: '#0098F6',
  name: 'hands-helping'
})`
    margin-bottom: 15px;
`

export const Span = styled.Text`
    font-size: 10px;
    font-family: 'Poppins-Medium';
    color: ${props => props.theme.colors.textInWhite};
    opacity: .8;
`

export const Bottom = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 20px;
`

export const IconContent = styled.View`
    background-color: ${props => props.theme.colors.blue};

    width: 50px;
    height: 50px;
    border-radius: 25px;

    align-items: center;
    justify-content: center;
`

export const Icon = styled(FontAwesome).attrs({
  size: 30,
  color: '#FFFF'
})`
    text-align: center;
`

export const ButtonContainer = styled.View`
    width: 90%;
    margin: 0 auto 15px;
`
