import moment from "moment"

export const formatTimeForCalendar = date => {
  const [month, day, year, ...time] = moment(date)
    .format("lll")
    .split(" ")

  return {
    day: day.slice(0, -1),
    month,
    year,
    time: time.join(" "),
  }
}
