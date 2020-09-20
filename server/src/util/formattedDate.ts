function formatDate (date: Date) {
  const dateFilter = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  }

  const { day, month, year } = dateFilter

  const dateFiltered = new Date(year, month, day)

  return dateFiltered
}

export default formatDate
