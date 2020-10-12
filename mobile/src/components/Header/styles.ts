import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Picker } from '@react-native-community/picker'

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

export const SelectContainer = styled.View`
    background-color: ${props => props.theme.colors.darkPrimary};
    height: 30px;
    width: 110px;
    padding: 0 10px;

    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: relative;

    margin-left: 20px;
`

export const Select = styled(Picker)`
    width: 100%;
    opacity: 0;
    position: absolute;
`

export const SelectedItem = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 13px;
    color: ${props => props.theme.colors.white};

`

export const ArrowBottom = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-down',
  size: 20
})`
    color: ${props => props.theme.colors.white};

`

export const CalendarFilter = styled(BorderlessButton)`
    padding: 2px;
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
