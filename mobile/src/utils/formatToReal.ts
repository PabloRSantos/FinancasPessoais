function formattedNumber (value: string) {
  const formattedValue = value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.')

  return Number(value) > 0 ? formattedValue : `-${formattedValue}`
}

export default formattedNumber
