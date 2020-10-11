import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useQuery } from '@apollo/client'
import { useTransacao } from '../../contexts/transacoes'
import { useTheme } from '../../contexts/themes'

import ListItemComponent, { Data } from '../../components/ListItem'

import { Container, ContentTitle, Title, Lista } from './styles'

import queries from './queries'
import { Alert } from 'react-native'
import FooterConfirm from '../../components/FooterConfirm'
import ShimmerCategorias from '../../components/ShimmerEffects/Categorias'
import { GetCategoria } from '../Home'

const Categorias: React.FC = () => {
  const [categoriasSelected, setCategoriasSelected] = useState<string[]>([])
  const [footerVisible, setFooterVisible] = useState(false)
  const [dataCategorias, setDataCategorias] = useState<GetCategoria>({} as GetCategoria)
  const [page, setPage] = useState(1)
  const { data, error } = useQuery(queries.getCategorias, { variables: { page } })
  const { changeState } = useTransacao()
  const { switchTheme } = useTheme()
  const navigation = useNavigation()

  if (error) {
    Alert.alert('Houve um erro ao carregar alguns dados, certfique-se que você está conectado a internet e tente novamente')
  }

  useEffect(() => {
    switchTheme('blue')
  }, [])

  useEffect(() => {
    if (!data) return

    if (!dataCategorias.categorias) {
      return setDataCategorias(data.getCategorias)
    }
    const totalCategorias = dataCategorias.categorias.concat(data.getCategorias.categorias)
    setDataCategorias({ pageDatas: data.getCategorias.pageDatas, categorias: totalCategorias })
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

  const handlePage = () => {
    const { pageTotal, pageAtual } = dataCategorias.pageDatas

    if (pageAtual < pageTotal) setPage(pageAtual + 1)
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
          Escolha um categoria
          </Title>
        </ContentTitle>

        {dataCategorias.categorias ? (
          <Lista
            data={dataCategorias.categorias}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => renderListItem(item as Data)}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={handlePage}
            onEndReachedThreshold={0.1}
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
