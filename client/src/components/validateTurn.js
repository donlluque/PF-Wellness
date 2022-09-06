//ARRAY TOTAL HOURS (de 8:00 a 20.30hrs)
export const createAllTurns = () => {
  let availableTurns = [];
  for (let i = 1; i < 26; i++) {
    availableTurns.push(i);
  }
  return availableTurns;
};

export const validateRange = (hours, totalHours) => {
  let totalTurns = totalHours;
  console.log(hours, "funcion");
  let availableTurns = [];
  if (hours.totalDay) {
    availableTurns = totalTurns.filter(
      (n) =>
        n.id >= parseInt(hours.totalDay.start) &&
        n.id < parseInt(hours.totalDay.end)
    );
  } else if (hours.notTotalDay) {
    let morningTurns = [];
    let afternoonTurns = [];
    if (hours.notTotalDay.morning) {
      morningTurns = totalTurns.filter(
        (n) =>
          n.id >= parseInt(hours.notTotalDay.morning.start) &&
          n.id < parseInt(hours.notTotalDay.morning.end)
      );
    }
    if (hours.notTotalDay.afternoon) {
      afternoonTurns = totalTurns.filter(
        (n) =>
          n.id >= parseInt(hours.notTotalDay.afternoon.start) &&
          n.id < parseInt(hours.notTotalDay.afternoon.end)
      );
    }
    availableTurns = morningTurns.concat(afternoonTurns);
  }
  return availableTurns;
};

export const searchTurnByDate = (turns, date) => {
  console.log(date);
  let turnsDate = turns.filter(
    (turn) => turn.date === date.toLocaleDateString()
  ); /// [{id: 1, fecha: ...}.... {..}, {}]

  console.log("turn en turn", turnsDate);
  return turnsDate;
};

export const searchTurnsAvailable = (
  hours,
  totalHours,
  totalTurns,
  date,
  absents
) => {
  let rangeTurns = validateRange(hours, totalHours);
  let dateTurns = searchTurnByDate(totalTurns, date); //[{},{}] dateTurns.map(e => e.hours_working[0].hour))
  console.log("soyDateTurn", dateTurns);
  let availableTurns = [];
  let aux = dateTurns.map((e) => e.hours_workings[0].hour);
  console.log("aux", aux);
  rangeTurns.forEach((i) => {
    if (!aux.find((e) => e === i.hour)) {
      availableTurns.push(i);
    }
  });
  console.log("ultimo", availableTurns);
  return availableTurns;
};
