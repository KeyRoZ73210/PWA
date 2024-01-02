const weekdays = [
  "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"
]

function Agenda(props) {

  weekdays.forEach((day) => {
    console.log(day)
  });

  const capitalizedWeekdays = weekdays.map((day) => {
    return day.toUpperCase()
  })

  // console.log(capitalizedWeekdays);

  return (
    <div className="m-3">
      <ul>
        {weekdays.map((day) => (
          <li key={day}>{day.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  )
}

export default Agenda;