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
  ValueContent,
  Label,
  Value
} from './styles'

import { User } from '../../pages/Home'
import ShimmerHeader from '../ShimmerEffects/Header'

interface HeaderComponentProps {
  onPressFilter: () => void
  onChangeSelect: (item: string) => void
  user: User
  selectInitial: string
  isLoading: boolean
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  onPressFilter,
  user,
  onChangeSelect,
  selectInitial,
  isLoading
}) => {
  const [selectedState, setSelectedState] = useState(selectInitial)
  const [saldoUser, setSaldoUser] = useState('0,00')
  const [balanceType, setBalanceType] = useState('Saldo disponivel')
  const { switchTheme } = useTheme()

  useEffect(() => {
    setSelectedState(selectInitial)
  }, [selectInitial])

  useEffect(() => {
    if (!user.saldo) return setSaldoUser('0,00')
    const saldoFormatted = formatToReal(user.saldo.toString())

    setSaldoUser(saldoFormatted)
  }, [user])

  const handleSelect = (item: string) => {
    setSelectedState(item)

    switch (item) {
      case 'Depósitos':
        switchTheme('green')
        setBalanceType('Depósitos')
        break
      case 'Retiradas':
        switchTheme('red')
        setBalanceType('Retiradas')
        break
      case 'Saldo':
        switchTheme('blue')
        setBalanceType('Saldo disponivel')
        break
    }

    onChangeSelect(item)
  }

  return (
    <Container>
      <TopBar>
        <Filter />

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

        <Filter onPress={onPressFilter}>
          <FilterIcon />
        </Filter>
      </TopBar>

      <ValueContent>
        <Label>
          {balanceType}
        </Label>
        {!isLoading ? (
          <Value>
            R${saldoUser}
          </Value>
        ) : (
          <ShimmerHeader />
        )}

      </ValueContent>
    </Container>

  )
}

export default HeaderComponent
