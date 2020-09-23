import styled from 'styled-components/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const Container = styled.View`
    border-bottom-width: 1px;
    border-color: ${props => props.theme.colors.cinza};
    padding: 0 5px 12px;
    margin: 10px 0;
`

export const Label = styled.Text`
     font-size: 12px;
    font-family: 'Poppins-Medium';
    color: ${props => props.theme.colors.textInWhite};
    opacity: .6;
`

export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const Icon = styled(FontAwesome).attrs({
  size: 20,
  color: '#0098F6'
})`
`

export const Input = styled.TextInput`
    flex: 1;
    height: 25px;
    padding: 0 8px;
    color: ${props => props.theme.colors.textInWhite};
    font-family: 'Poppins-Medium';
`
