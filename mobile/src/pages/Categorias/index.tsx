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
  const [categoria, setCategoria] = useState<string | null>(null)
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
    if (categoriaId === categoria) {
      setCategoria(null)
    }

    if (categoria === null) {
      setCategoria(categoriaId)
    }

    setFooterVisible(categoria !== null)
  }

  const handleConfirm = () => {
    if (categoria === null) return Alert.alert('Selecione alguma categoria')
    changeState({ categoria: categoria })
    navigation.navigate('Add')
  }

  const renderListItem = (item: Data) => (
    <ListItemComponent
      handleCategoria={id => handleCategoria(id)}
      name={item.name}
      icon={item.icon}
      _id={item._id}
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
