import React, { useState } from 'react'

import { Container, Item, BgIcon, Icon, Name, Circle } from './styles'

export interface Data {
  _id: string
  icon: string,
  name: string,
  handleItem: (id: string) => void
}

const ListItemComponent: React.FC<Data> = ({ name, _id, icon, handleItem }) => {
  const [selected, setSelected] = useState(false)

  const selectedItem = (id: string) => {
    setSelected(!selected)
    handleItem(id)
  }

  return (
    <Container>
      <Item onPress={() => selectedItem(_id)}>
        <BgIcon>
          <Icon source={{ uri: icon }}/>
        </BgIcon>
        <Name>
          {name}
        </Name>

      </Item>

      <Circle selected={selected}/>
    </Container>
  )
}

export default ListItemComponent
