import React, { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { useTheme } from '../../contexts/themes'

import HeaderComponent from '../../components/Header'
import TransacoesComponent from '../../components/Transacoes'
import GraficosComponent from '../../components/Grafico'
import ContasComponent from '../../components/Contas'

import { Container, ContainerFlatItems } from './styles'
import { useFocusEffect } from '@react-navigation/native'
import CalendarComponent from '../../components/Calendar'

interface Item {
  key: string;
  // eslint-disable-next-line no-undef
  render: () => JSX.Element;
}

interface IMarkedDates {
    [dateString: string]: {
      startingDay?: boolean
      endingDay?: boolean
      color: string
      textColor: string
    }
  }

const Home: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [markedDates, setMarkedDate] = useState<IMarkedDates>()
  const { switchTheme } = useTheme()

  useFocusEffect(
    useCallback(() => {
      switchTheme('blue')
    }, [])
  )

  const handleCalendar = () => {
    showCalendar ? setShowCalendar(false) : setShowCalendar(true)
  }

  const handleCalendarDay = (day: string) => {
    if (markedDates) {
      setMarkedDate({ [day]: { startingDay: true, color: '#0098F6', textColor: 'white' } })
      var firstDay: String[] = day.split('-')
      return
    }

    const lastDay = day.split('-')

    const objects = []

    for (let i = Number(firstDay[2]); i < Number(lastDay[2]); i++) {
      objects.push({})
    }

    // const newMarkedDay = { [day]: { selected: true } }
    // const oldDays = markedDates

    // const newObject = Object.assign(oldDays, newMarkedDay)

    // setMarkedDate(newObject)
  }

  const data: Item[] = [
    {
      key: 'Transacoes',
      render: () => (
        <ContainerFlatItems>
          <TransacoesComponent />
          <TransacoesComponent />
          <TransacoesComponent />
        </ContainerFlatItems>
      )
    },
    {
      key: 'Graficos',
      render: () => (
        <ContainerFlatItems>
          <GraficosComponent />
        </ContainerFlatItems>
      )
    },
    {
      key: 'Contas',
      render: () => (
        <ContainerFlatItems>
          <ContasComponent />
          <ContasComponent />
          <ContasComponent />
        </ContainerFlatItems>
      )
    }
  ]

  return (
    <Container>
      <HeaderComponent onPressCalendar={handleCalendar}/>
      {showCalendar &&
        <CalendarComponent
          markingType={'period'}
          markedDates={markedDates}

          onDayPress={({ dateString }) => handleCalendarDay(dateString)}/>}

      <FlatList
        data= {data}
        renderItem={({ item }) => item.render()}
        keyExtractor={item => item.key}
      />
    </Container>
  )
}

export default Home
