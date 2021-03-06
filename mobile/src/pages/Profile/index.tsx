import React, { useCallback, useEffect, useState } from 'react'
import { Linking, Alert } from 'react-native'
import CardComponent from '../../components/CardInfos'

import graphql from './graphql'

import { useQuery } from '@apollo/client'

import { useTheme } from '../../contexts/themes'
import { useAuth } from '../../contexts/auth/auth'

import {
  Container,
  CardContainer,
  Title,
  Top,
  IconBig,
  Span,
  Bottom,
  IconContent,
  Icon,
  ButtonContainer
} from './styles'

import { User } from '../Home'
import { useFocusEffect } from '@react-navigation/native'
import ButtonComponent from '../../components/Button'
import ShimmerProfile from '../../components/ShimmerEffects/Profile'

const Profile: React.FC = () => {
  const { data, loading, error } = useQuery(graphql.query)
  const [userInfos, setUserInfos] = useState<User>({} as User)
  const { switchTheme } = useTheme()
  const { SignOut } = useAuth()

  if (error) {
    Alert.alert('Houve um erro ao carregar seus dados, tente novamente')
  }

  useFocusEffect(useCallback(() => {
    switchTheme('blue')
  }, []))

  useEffect(() => {
    if (data) { setUserInfos(data.getUser) }
  }, [data])

  const openUrl = async (url: string) => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    } else {
      Alert.alert('Seu celular não suporta abrir a URL')
    }
  }

  return (
    <Container>
      <CardContainer>
        <Title>
          Perfil
        </Title>
        {!loading ? (
          <>
            <CardComponent label='Nome' icon='user' placeholder='Nome' value={userInfos.name}/>
            <CardComponent label='Email' icon='envelope' placeholder='Email' value={userInfos.email}/>
          </>
        ) : (
          <>
            <ShimmerProfile />
            <ShimmerProfile />
          </>
        )}

      </CardContainer>

      <CardContainer>
        <Top>
          <IconBig />
          <Title>Como podemos te ajudar?</Title>
          <Span>Entre em contato com a gente!</Span>
        </Top>

        <Bottom>
          <IconContent onPress={() => openUrl('https://github.com/PabloRSantos')}>
            <Icon name='github'/>
          </IconContent>

          <IconContent onPress={() => openUrl('https://www.linkedin.com/in/pablo-rosa-68136a1b2/')}>
            <Icon name='linkedin-square'/>
          </IconContent>

          <IconContent onPress={() => openUrl('https://twitter.com/Pablo_RSantos')}>
            <Icon name='twitter'/>
          </IconContent>
        </Bottom>

      </CardContainer>

      <ButtonContainer>
        <ButtonComponent onPress={() => SignOut()} text='Sair' active={true}/>
      </ButtonContainer>
    </Container>
  )
}

export default Profile
