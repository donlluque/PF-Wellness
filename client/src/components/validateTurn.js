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
  console.log("soy 0", totalTurns);
  let availableTurns = [];
  if (hours.totalDay) {
    console.log("soy hours.totalDay", hours.totalDay);
    availableTurns = totalTurns.filter(
      (n) =>
        n.id >= parseInt(hours.totalDay.start) &&
        n.id < parseInt(hours.totalDay.end)
    );
    console.log("soy 1", availableTurns);
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
  let turnsDate = turns.filter((turn) => turn.date === date); /// [{id: 1, fecha: ...}.... {..}, {}]
  return turnsDate;
};

export const searchTurnsAvailable = (hours, totalHours, totalTurns, date) => {
  let rangeTurns = validateRange(hours, totalHours);
  let dateTurns = searchTurnByDate(totalTurns, date); //[{},{}] dateTurns.map(e => e.hours_working[0].hour))

  let availableTurns = rangeTurns.filter((h) => h.id !== dateTurns.idHora);
  return availableTurns;
};
