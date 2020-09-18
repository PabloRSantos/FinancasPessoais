import React, { useState } from 'react'
import { useTheme } from '../../contexts/themes'
import { BorderlessButtonProperties } from 'react-native-gesture-handler'

import {
  Container,
  TopBar,
  Filter,
  FilterIcon,
  SelectContainer,
  Select,
  SelectedItem,
  ArrowBottom,
  CalendarFilter,
  CalendarFilterIcon,
  ValueContent,
  Label,
  Value
} from './styles'

// interface ICalendarFilter extends BorderlessButtonProperties{
// }

interface HeaderComponentProps {
  onPressCalendar: () => void
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ onPressCalendar }) => {
  const [selectedState, setSelectedState] = useState('Saldo')
  const { switchTheme } = useTheme()

  const handleSelect = (item: string) => {
    setSelectedState(item)

    switch (item) {
      case 'Depósitos':
        switchTheme('green')
        break
      case 'Retiradas':
        switchTheme('red')
        break
      case 'Saldo':
        switchTheme('blue')
        break
    }
  }

  return (
    <Container>
      <TopBar>
        <Filter>
          <FilterIcon />
        </Filter>

        <SelectContainer>
          <SelectedItem>{selectedState}</SelectedItem>
          <ArrowBottom />

          <Select
            selectedValue={selectedState}
            onValueChange={(itemValue) => handleSelect(itemValue as string)}>
            <Select.Item label='Saldo' value='Saldo'/>
            <Select.Item label='Depósitos' value='Depósitos'/>
            <Select.Item label='Retiradas' value='Retiradas'/>
          </Select>
        </SelectContainer>

        <CalendarFilter onPress={onPressCalendar}>
          <CalendarFilterIcon />
        </CalendarFilter>
      </TopBar>

      <ValueContent>
        <Label>
          Saldo disponivel
        </Label>

        <Value>
          R$0,00
        </Value>
      </ValueContent>
    </Container>
  )
}

export default HeaderComponent
