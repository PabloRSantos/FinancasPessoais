import React, { useEffect, useCallback, useState } from 'react'
import { Calendar, CalendarBaseProps, CustomMarkingProps, LocaleConfig } from 'react-native-calendars'

LocaleConfig.locales.br = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.']
}
LocaleConfig.defaultLocale = 'br'

const CalendarComponent: React.FC<CalendarBaseProps & CustomMarkingProps> = (props) => {
  const [propsState, setProps] = useState(props)

  useEffect(useCallback(() => {
    setProps(props)
    console.log(props)
  }, [props]))
  return (

    <Calendar
      minDate={Date()}
      theme={{
        arrowColor: '#0098F6',
        monthTextColor: '#504E4E',
        textDayFontFamily: 'Poppins-Medium',
        textMonthFontFamily: 'Poppins-Bold',
        textDayHeaderFontFamily: 'Poppins-SemiBold',
        textDayFontSize: 10,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 10
      }}
      {...propsState}/>

  )
}

export default CalendarComponent
