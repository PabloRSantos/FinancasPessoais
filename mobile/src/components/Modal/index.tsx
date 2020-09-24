import React from 'react'
import { BorderlessButtonProperties } from 'react-native-gesture-handler'
import ListItemComponent from '../ListItem'

import { Container, Background, Modal, Title, Lista } from './styles'

interface Item {
  name: string,
  icon: string
}

const ModalComponent: React.FC<BorderlessButtonProperties> = ({ ...rest }) => {
  const arrayData: Item[] = [{
    name: 'Nome',
    icon: 'name'
  },
  {
    name: 'Data',
    icon: 'date'
  },
  {
    name: 'Categoria',
    icon: 'categoria'
  },
  {
    name: 'Valor',
    icon: 'valor'
  }]

  const handleFilter = (id: string) => {
  }

  return (
    <Container>
      <Background {...rest}/>
      <Modal>
        <Title>
            Ordenar por
        </Title>

        <Lista>
          {arrayData.map((item, index) => (
            <ListItemComponent
              key={index}
              name={item.name}
              icon={item.icon}
              handleItem={id => handleFilter(id)}
              _id={index.toString()}
            />
          ))}
        </Lista>
      </Modal>
      <Background {...rest}/>
    </Container>
  )
}

export default ModalComponent
