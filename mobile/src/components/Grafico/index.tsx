import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Categoria, Transacao } from '../../pages/Home'

import {
  Container,
  Title,
  Categorias,
  Items,
  Icon,
  Name,
  RightSide,
  Grafico,
  SpanButton,
  Span
} from './styles'

interface GraficoComponentProps {
  transacoes: Transacao[]
  categorias: Categoria[]
}

interface Datas {
  categoria: string,
  valor: number,
  color: string
}

const GraficoComponent: React.FC<GraficoComponentProps> = ({ categorias, transacoes }) => {
  const [datas, setDatas] = useState<Datas[]>([])

  useEffect(() => {
    if (categorias.length > 0 && transacoes.length > 0) { formatDatas() }
  }, [categorias, transacoes])

  const formatDatas = () => {
    const dataItems: Datas[] = categorias.map(categoria => {
      const valores = transacoes.map(transacao => {
        if (transacao.categoria._id === categoria._id) {
          const valor = transacao.valor.replace(/\D/g, '')
          return Number(valor)
        } else return 0
      })

      const totalValor = valores.reduce((total = 0, valor) => total + Number(valor))

      const dataItem = { categoria: categoria.name, valor: totalValor || 0, color: randomColor() }

      return dataItem
    })

    const datasFiltered = dataItems.filter(data => data.valor !== 0)

    setDatas(datasFiltered)
  }

  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

  const pieData = datas
    .map((value, index) => ({
      value: value.valor,
      svg: {
        fill: value.color,
        onPress: () => console.log('press', value.categoria)
      },
      key: `pie-${index}`
    }))

  const renderListItem = (data: Datas, index: number) => (
    <Items>
      <Icon color={data.color}/>
      <Name>
        {data.categoria}
      </Name>
    </Items>
  )

  return (
    <Container>
      {transacoes.length > 0 && categorias.length > 0 ? (
        <>
          <Categorias>
            <FlatList
              data={datas}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => renderListItem(item as Datas, index)}
              keyExtractor={(item: Datas, index) => index.toString()}
            />
          </Categorias>

          <RightSide>
            <Grafico data={pieData}/>
            <SpanButton>
              <Span>
            Ver mais
              </Span>
            </SpanButton>
          </RightSide>
        </>
      ) : (
        <Title>
          Nenhuma transação foi encontrada
        </Title>
      )}

    </Container>
  )
}

export default GraficoComponent
