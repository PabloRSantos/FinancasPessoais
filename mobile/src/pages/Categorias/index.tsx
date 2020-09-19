import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useQuery } from '@apollo/client'
import { useTransacao } from '../../contexts/transacoes'
import { useTheme } from '../../contexts/themes'

import ListItemComponent, { Data } from '../../components/ListItem'

import { Container, ContentTitle, Title, Lista } from './styles'

import queries from './queries'
import { Alert, ActivityIndicator } from 'react-native'
import FooterConfirm from '../../components/FooterConfirm'

const Categorias: React.FC = () => {
  const [categorias, setCategorias] = useState<string[]>([])
  const [footerVisible, setFooterVisible] = useState(false)
  const { data, loading, error } = useQuery(queries.getCategorias)
  const { changeState } = useTransacao()
  const { switchTheme } = useTheme()
  const navigation = useNavigation()

  if (error) {
    Alert.alert('Houve um erro ao carregar alguns dados, certfique-se que você está conectado a internet e tente novamente')
  }

  useEffect(() => {
    switchTheme('blue')
  }, [])

  const handleCategoria = (categoriaId: string) => {
    const SelectedCategorias = categorias.filter(categoria => categoria !== categoriaId)

    if (SelectedCategorias.length === categorias.length) SelectedCategorias.push(categoriaId)
    console.log(SelectedCategorias.length)
    setCategorias(SelectedCategorias)
    setFooterVisible(SelectedCategorias.length !== 0)
  }

  const handleConfirm = () => {
    if (!categorias) return Alert.alert('Selecione alguma categoria')
    changeState({ categoriaId: categorias })
    navigation.navigate('Add')
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
    <>
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
            renderItem={({ item, index }) => renderListItem(item as Data)}
            keyExtractor={(item, index) => index.toString()}
          />
        )}

      </Container>

      {footerVisible && <FooterConfirm onPress={handleConfirm}/>}

    </>
  )
}

export default Categorias
