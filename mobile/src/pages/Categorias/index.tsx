import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useQuery } from '@apollo/client'
import { useTransacao } from '../../contexts/transacoes/index'

import ListItemComponent, { Data } from '../../components/ListItem'

import { Container, ContentTitle, Title, Lista } from './styles'

import queries from './queries'
import { Alert, ActivityIndicator } from 'react-native'

const Categorias: React.FC = () => {
  const { data, loading, error } = useQuery(queries.getCategorias)
  const { changeState } = useTransacao()
  const navigation = useNavigation()

  if (error) {
    Alert.alert('Houve um erro ao carregar alguns dados, certfique-se que você está conectado a internet e tente novamente')
  }

  const handleCategoria = (categoria: string) => {
    changeState({ categoriaId: categoria })
    navigation.navigate('Calculadora')
  }

  const renderListItem = (item: Data) => (
    <ListItemComponent
      onPress={() => handleCategoria(item._id as string)}
      name={item.name}
      icon={item.icon}
      colorTheme={item.colorTheme}
    />
  )

  return (
    <Container>
      <ContentTitle>
        <Title>
          Escolha um categoria
        </Title>
      </ContentTitle>

      {loading ? (
        <ActivityIndicator style={{ flex: 1, backgroundColor: '#0098F6' }}/>
      ) : (
        <Lista
          data={data.categorias}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => renderListItem(item as Data)}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

    </Container>
  )
}

export default Categorias
