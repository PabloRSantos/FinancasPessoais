import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useQuery } from '@apollo/client'
import { useTransacao } from '../../contexts/transacoes'

import ListItemComponent, { Data } from '../../components/ListItem'

import { Container, ContentTitle, Title, Lista } from './styles'

import queries from './queries'
import { Alert } from 'react-native'
import FooterConfirm from '../../components/FooterConfirm'
import ShimmerCategorias from '../../components/ShimmerEffects/Categorias'
import { Categoria } from '../Home'

const Categorias: React.FC = () => {
  const [categoriasSelected, setCategoriasSelected] = useState<string[]>([])
  const [footerVisible, setFooterVisible] = useState(false)
  const [dataCategorias, setDataCategorias] = useState<Categoria[]>({} as Categoria[])
  const { data, error } = useQuery(queries.getCategorias)
  const { changeState } = useTransacao()
  const navigation = useNavigation()

  if (error) {
    Alert.alert('Houve um erro ao carregar alguns dados, certfique-se que você está conectado a internet e tente novamente')
  }

  useEffect(() => {
    if (!data) return

    return setDataCategorias(data.getCategorias)
  }, [data])

  const handleCategoria = (categoriaId: string) => {
    if (categoriasSelected.length === 0) {
      setCategoriasSelected([categoriaId])
      setFooterVisible(true)
      return
    }

    const categoriasFiltered = categoriasSelected.filter(categoria => categoria !== categoriaId)

    if (categoriasFiltered.length === categoriasSelected.length) {
      setCategoriasSelected([...categoriasSelected, categoriaId])
    } else {
      setCategoriasSelected(categoriasFiltered)

      categoriasFiltered.length === 0 && setFooterVisible(false)
    }
  }

  const handleConfirm = () => {
    if (categoriasSelected.length === 0) return Alert.alert('Selecione alguma categoria')
    if (categoriasSelected.length > 1) return Alert.alert('Selecione somente uma categoria')
    changeState({ categoria: categoriasSelected[0] })
    navigation.navigate('Add')
  }

  const renderListItem = (item: Data) => (
    <ListItemComponent
      handleItem={id => handleCategoria(id)}
      name={item.name}
      icon={item.icon}
      _id={item._id}
    />
  )

  return (
    <>
      <Container>
        <ContentTitle>
          <Title>
          Escolha uma categoria
          </Title>
        </ContentTitle>

        {dataCategorias.length > 0 ? (
          <Lista
            data={dataCategorias}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => renderListItem(item as Data)}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <ShimmerCategorias />
        )}

      </Container>

      {footerVisible && <FooterConfirm onPress={handleConfirm}/>}

    </>
  )
}

export default Categorias
