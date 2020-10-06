import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export const Container = styled.View`
    position: absolute;
    bottom: -10px;
    height: ${height + 'px'};
    width: ${width + 'px'};
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10000;

    justify-content: flex-end;
`

export const Background = styled(BorderlessButton)`
    flex: 1;
`

export const Modal = styled.View`
    width: 100%;
    height: 350px;

    background-color: ${props => props.theme.colors.white};

    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

    align-items: center;
    padding: 24px;

    position: relative;
`

export const CloseButton = styled(BorderlessButton)`
    position: absolute;
    top: 20px;
    right: 20px;
`

export const CloseIcon = styled(AntDesign).attrs({
  name: 'closecircleo',
  size: 23
})`
    color: red;
    opacity: 0.7;
  `

export const Top = styled.View`
    align-items: center;
`

export const Name = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
    font-family: 'Poppins-Bold';
`

export const BigIconContainer = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${props => props.theme.colors.primary};
    margin-bottom: 5px;
    padding: 12px;
`

export const BigIcon = styled.Image`
    width:  100%;
    height: 100%;
`

export const Icon = styled(FontAwesome).attrs({
  size: 25
})`
    margin-right: 5px;
    color: ${props => props.theme.colors.primary};
`

export const Valor = styled.Text`
    color: ${props => props.theme.colors.textInWhite};
    font-size: 24px;
    font-family: 'Poppins-Bold';
    margin-top: -8px;
`

export const Bottom = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex: 1;
`

export const Left = styled.View`
    flex: 1;
    height: 130px;
    justify-content: space-between;
`

export const DataContainer = styled.View`
`

export const Title = styled.Text`
    font-size: 16px;
    font-family: 'Poppins-Medium';
    color: ${props => props.theme.colors.textInWhite};
    opacity: .7;
`

export const Info = styled.Text`
    font-size: 14px;
    font-family: 'Poppins-Medium';
    color: ${props => props.theme.colors.textInWhite};
    max-width: 90%;
`

export const CategoriaContainer = styled.View`
`

export const Right = styled.View`
    height: 100px;
    justify-content: space-between;
    flex: 1;
`

export const ActionContainer = styled(BorderlessButton)`
    flex-direction: row;
    align-items: center;
`
