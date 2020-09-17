import React from 'react'
import { BorderlessButtonProperties } from 'react-native-gesture-handler'

import { Container, Item, Icon, Name } from './styles'

export interface Data extends BorderlessButtonProperties{
  _id?: string
  icon: string,
  name: string,
  colorTheme?: string
  isCompleted?: boolean
  isNegative?: boolean
}

const ListItemComponent: React.FC<Data> = ({ name, colorTheme, icon, ...rest }) => {
  return (
    <Container>
      <Item {...rest}>
        <Icon />
        <Name>
          {name}
        </Name>
      </Item>
    </Container>
  )
}

export default ListItemComponent
