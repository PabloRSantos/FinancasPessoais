import React, { useEffect, useState } from 'react'
import CardComponent from '../../components/CardInfos'

import graphql from './graphql'

import { useQuery } from '@apollo/client'

import {
  Container,
  CardContainer,
  Title,
  Top,
  IconBig,
  Span,
  Bottom,
  IconContent,
  Icon
} from './styles'
import { ActivityIndicator, Alert } from 'react-native'
import { User } from '../Home'

const Profile: React.FC = () => {
  const { data, loading, error } = useQuery(graphql.query)
  const [userInfos, setUserInfos] = useState<User>({} as User)

  // if (loading) {
  //   return <ActivityIndicator style={{ flex: 1, backgroundColor: '#0098F6' }}/>
  // }

  if (error) {
    Alert.alert('Houve um erro ao carregar seus dados, tente novamente')
  }

  useEffect(() => {
    if (data) { setUserInfos(data.user) }
  }, [data])

  return (
    <Container>
      <CardContainer>
        <Title>
          Perfil
        </Title>
        <CardComponent label='Nome' icon='user' placeholder='Nome' value={userInfos.name}/>
        <CardComponent label='Email' icon='envelope' placeholder='Email' value={userInfos.email}/>
        <CardComponent label='Senha' icon='lock' placeholder='Senha' value={userInfos.password}/>
      </CardContainer>

      <CardContainer>
        <Top>
          <IconBig />
          <Title>Como podemos te ajudar?</Title>
          <Span>Entre em contato com a gente!</Span>
        </Top>

        <Bottom>
          <IconContent>
            <Icon name='github'/>
          </IconContent>

          <IconContent>
            <Icon name='linkedin-square'/>
          </IconContent>

          <IconContent>
            <Icon name='twitter'/>
          </IconContent>
        </Bottom>

      </CardContainer>

      <CardContainer>
        <Title>
          Cartões
        </Title>
        <CardComponent icon='credit-card' placeholder='Cartão'/>
        <CardComponent icon='credit-card' placeholder='Cartão'/>
        <CardComponent icon='credit-card' placeholder='Cartão'/>
      </CardContainer>
    </Container>
  )
}

export default Profile
