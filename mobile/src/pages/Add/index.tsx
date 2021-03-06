import React, { useState } from 'react'
import { Alert } from 'react-native'

import { useTransacao } from '../../contexts/transacoes'

import ButtonComponent from '../../components/Button'
import FooterConfirm from '../../components/FooterConfirm'
import InputComponent from '../../components/Input'

import { Container, Title, ContentTitle } from './styles'
import CalendarComponent from '../../components/Calendar'
import { useNavigation } from '@react-navigation/native'

const Add: React.FC = () => {
  const [title, setTitle] = useState('')
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [date, setDate] = useState(new Date())
  const navigation = useNavigation()

  const { createTransacao } = useTransacao()

  const onChangeCalendar = (selectedDate: Date) => {
    if (!selectedDate) return setCalendarVisible(false)
    setDate(selectedDate)
    setCalendarVisible(false)
  }

  const handleConfirm = async () => {
    if (title === '') return Alert.alert('O titulo está vazio')
    createTransacao(title, date)
    navigation.navigate('Home')
  }

  return (
    <>
      <Container>
        <ContentTitle>
          <Title>
          Ultimas informações
          </Title>
        </ContentTitle>

        <InputComponent
          classInput='unique'
          nameIcon='pencil'
          placeholder='Titulo'
          value={title}
          onChangeText={text => setTitle(text)}/>

        <ButtonComponent
          text='Data de vencimento'
          active={true}
          onPress={() => setCalendarVisible(true)}/>

        {calendarVisible &&
          <CalendarComponent
            minimumDate={new Date()}
            value={date}
            onChange={(e, date) => onChangeCalendar(date as Date)}/>}

      </Container>

      <FooterConfirm onPress={handleConfirm}/>

    </>
  )
}

export default Add
