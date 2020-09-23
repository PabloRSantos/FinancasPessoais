import React from 'react'
import { BorderlessButtonProperties } from 'react-native-gesture-handler'

import { Transacao } from '../../pages/Home'

import {
  Container,
  Background,
  Modal,
  Top,
  Bottom,
  Name,
  BigIcon,
  Icon,
  Valor,
  Left,
  DataContainer,
  Title,
  Info,
  CategoriaContainer,
  Right,
  ActionContainer
} from './styles'

interface TransacaoDetailProps extends BorderlessButtonProperties{
  dataModal: Transacao
}

const TransacaoDetail: React.FC<TransacaoDetailProps> = ({ dataModal, ...rest }) => {
  return (
    <Container>
      <Background {...rest}/>
      <Modal>
        <Top>
          <BigIcon />
          <Name>
            {dataModal.title}
          </Name>
          <Valor>
            R${dataModal.valor}
          </Valor>
        </Top>

        <Bottom>

          <Left>

            <DataContainer>
              <Title>
              Data
              </Title>
              <Info>
                {dataModal.date}
              </Info>
            </DataContainer>

            <CategoriaContainer>
              <Title>
              Categoria
              </Title>

              <Info>
                {dataModal.categoria.name}
              </Info>
            </CategoriaContainer>
          </Left>

          <Right>
            <ActionContainer>
              <Icon />
              <Info>
              Editar
              </Info>
            </ActionContainer>

            <ActionContainer>
              <Icon />
              <Info>
              Remover
              </Info>
            </ActionContainer>
          </Right>
        </Bottom>

      </Modal>
    </Container>
  )
}

export default TransacaoDetail
