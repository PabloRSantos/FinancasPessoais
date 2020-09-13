import React, { useState } from 'react'
import ListItemComponent from '../../components/ListItem'

import { Container, ContentTitle, Title, Lista } from './styles'

export interface Data {
  icon: string,
  name: string
}

const Add: React.FC = () => {
  const [data, setData] = useState<Data[]>([{
    icon: 'a',
    name: 'Lazer'
  }, {
    icon: 'a',
    name: 'Lazer'
  }, {
    icon: 'a',
    name: 'Lazer'
  }, {
    icon: 'a',
    name: 'Laze'
  }])

  const renderListItem = (item: Data) => (<ListItemComponent
    name={item.name}
    icon={item.icon}
  />
  )

  return (
    <Container>
      <ContentTitle>
        <Title>
          O que você quer adicionar?
        </Title>
      </ContentTitle>

      <Lista
        data={data}
        renderItem={({ item }) => renderListItem(item as Data)}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  )
}

export default Add
