import React from 'react'
import { Data } from '../../pages/Add'

import { Container, Item, Icon, Name } from './styles'

const ListItemComponent: React.FC<Data> = ({ name }) => {
  return (
    <Container>
      <Item>
        <Icon />
        <Name>
          {name}
        </Name>
      </Item>
    </Container>
  )
}

export default ListItemComponent
