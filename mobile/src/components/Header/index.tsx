import React from 'react'

import {
  Container,
  TopBar,
  Filter,
  FilterIcon,
  SelectContent,
  TypeSelected,
  ArrowBottom,
  CalendarFilter,
  CalendarFilterIcon,
  ValueContent,
  Label,
  Value
} from './styles'

const HeaderComponent: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <Filter>
          <FilterIcon />
        </Filter>

        <SelectContent>
          <TypeSelected>
            Saldo
          </TypeSelected>
          <ArrowBottom />
        </SelectContent>

        <CalendarFilter>
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
