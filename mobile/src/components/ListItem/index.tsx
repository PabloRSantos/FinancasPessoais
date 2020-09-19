import React, { useState } from 'react'
import { BorderlessButtonProperties } from 'react-native-gesture-handler'

import { Container, Item, Icon, Name, Circle } from './styles'

export interface Data extends BorderlessButtonProperties{
  _id?: string
  icon: string,
  name: string,
  colorTheme?: string
  isCompleted?: boolean
}

const ListItemComponent: React.FC<Data> = ({ name, colorTheme, icon, ...rest }) => {
  const [selected, setSelected] = useState(false)

  return (
    <Container>
      <Item {...rest}>
        <Icon />
        <Name>
          {name}
        </Name>

      </Item>

      <Circle selected={selected}/>
    </Container>
  )
}

export default ListItemComponent
