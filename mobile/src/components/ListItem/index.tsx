import React, { useState } from 'react'

import { Container, Item, Icon, Name, Circle } from './styles'

export interface Data {
  _id: string
  icon: string,
  name: string,
  colorTheme?: string
  isCompleted?: boolean
  handleCategoria: (id: string) => void
}

const ListItemComponent: React.FC<Data> = ({ name, colorTheme, _id, icon, handleCategoria }) => {
  const [selected, setSelected] = useState(false)

  const selectedItem = (id: string) => {
    setSelected(!selected)
    handleCategoria(id)
  }

  return (
    <Container>
      <Item onPress={() => selectedItem(_id)}>
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
