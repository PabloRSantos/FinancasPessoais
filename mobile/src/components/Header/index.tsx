import React, { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/themes'
import formatToReal from '../../utils/formatToReal'

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

import { User } from '../../pages/Home'

interface HeaderComponentProps {
  onPressCalendar: () => void
  user: User
  onChangeSelect: (item: string) => void
  selectInitial: string
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ onPressCalendar, user, onChangeSelect, selectInitial }) => {
  const [selectedState, setSelectedState] = useState(selectInitial)
  const [saldoUser, setSaldoUser] = useState('0,00')
  const { switchTheme } = useTheme()

  useEffect(() => {
    setSelectedState(selectInitial)
  }, [selectInitial])

  useEffect(() => {
    if (!user.saldo) return
    const saldoFormatted = formatToReal(user.saldo.toString())

    setSaldoUser(saldoFormatted)
  }, [user])

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

    onChangeSelect(item)
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
          R${saldoUser}
        </Value>
      </ValueContent>
    </Container>
  )
}

export default HeaderComponent
