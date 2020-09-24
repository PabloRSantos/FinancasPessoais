import React from 'react'

import { Transacao } from '../../pages/Home'

import { useMutation } from '@apollo/client'
import graphql from './graphql'

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

interface TransacaoDetailProps {
  dataModal: Transacao
  handleModal: (action: boolean) => void
}

const TransacaoDetail: React.FC<TransacaoDetailProps> = ({ dataModal, handleModal }) => {
  const [runMutation] = useMutation(graphql.mutation)

  const removeItem = async (id: String) => {
    const { data, errors } = await runMutation({ variables: { TransacaoId: id } })
    errors && console.log(errors)
    data && console.log(data)
    handleModal(true)
  }

  return (
    <Container>
      <Background onPress={() => handleModal(false)}/>
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

            <ActionContainer onPress={() => removeItem(dataModal._id)}>
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
