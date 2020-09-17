import React, { useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import ListItemComponent, { Data } from '../../components/ListItem'

import { useTheme } from '../../contexts/themes'
import { useTransacao } from '../../contexts/transacoes'

import { Container, ContentTitle, Title, Lista } from './styles'

const Add: React.FC = () => {
  const { switchTheme } = useTheme()
  const { changeState } = useTransacao()
  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      switchTheme('blue')
    }, [])
  )

  const handleCategoria = (colorTheme: String, isCompleted: boolean, isNegative: boolean) => {
    switchTheme(colorTheme)
    changeState({ isCompleted, isNegative })
    navigation.navigate('Categorias')
  }

  const data: Data[] = [{
    icon: 'a',
    name: 'Depósito',
    colorTheme: 'green',
    isCompleted: true,
    isNegative: false
  }, {
    icon: 'a',
    name: 'Prejuizo',
    colorTheme: 'red',
    isCompleted: true,
    isNegative: true

  }, {
    icon: 'a',
    name: 'Nova conta',
    colorTheme: 'red',
    isCompleted: false,
    isNegative: true

  },
  {
    icon: 'a',
    name: 'Futuro depósito',
    colorTheme: 'green',
    isCompleted: false,
    isNegative: false
  }
  ]

  const renderListItem = (item: Data) => (
    <ListItemComponent
      onPress={() => handleCategoria(
        item.colorTheme as String,
        item.isCompleted as boolean,
        item.isNegative as boolean)}
      name={item.name}
      icon={item.icon}
      colorTheme={item.colorTheme}
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
