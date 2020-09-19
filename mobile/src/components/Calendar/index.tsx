import React from 'react'
import DateTimePicker, { DatePickerOptions } from '@react-native-community/datetimepicker'
import { View } from 'react-native'

const CalendarComponent: React.FC<DatePickerOptions> = (props) => {
  return (
    <View>
      <DateTimePicker
        {...props}
        minimumDate={new Date()}
        mode={'date'}
        display="default"
      />
    </View>

  )
}

export default CalendarComponent
