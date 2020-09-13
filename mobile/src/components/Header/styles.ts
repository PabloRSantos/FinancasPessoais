import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const Container = styled.View`
    height: 150px;
    background-color: ${props => props.theme.colors.primary};
    padding: 20px 25px 0px;
`

export const TopBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

export const Filter = styled(BorderlessButton)`
`

export const FilterIcon = styled(FontAwesome).attrs({
  name: 'filter',
  size: 20
})`
    color: ${props => props.theme.colors.white};
`

export const SelectContent = styled(BorderlessButton)`
    background-color: ${props => props.theme.colors.darkPrimary};
    padding: 5px 20px;
    height: 30px;
    border-radius: 8px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const TypeSelected = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: 13px;
    font-family: 'Archivo-SemiBold';
`

export const ArrowBottom = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-down',
  size: 20
})`
    color: ${props => props.theme.colors.white};

`

export const CalendarFilter = styled(BorderlessButton)`
`

export const CalendarFilterIcon = styled(FontAwesome).attrs({
  name: 'calendar',
  size: 20
})`
    color: ${props => props.theme.colors.white};
`

export const ValueContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    margin-top: 10px;
`

export const Label = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: 15px;
    font-family: 'Archivo-SemiBold';
`

export const Value = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: 34px;
    font-family: 'Poppins-Bold';
    line-height: 47px;

`
