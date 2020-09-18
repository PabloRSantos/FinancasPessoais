import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { View } from 'react-native'

const CalendarComponent: React.FC = () => {
  const [date, setDate] = useState(new Date())

  const onChange = (selectedDate: Date) => {
    if (!selectedDate) return
    const currentDate = selectedDate || date
    setDate(currentDate)
  }

  return (
    <View>
      <DateTimePicker
        testID="dateTimePicker"
        minimumDate={new Date()}
        value={date}
        mode={'date'}
        display="default"
        onChange={(e, date) => onChange(date as Date)}
      />
    </View>

  )
}

export default CalendarComponent
