//ARRAY TOTAL HOURS (de 8:00 a 20.30hrs)
export const createAllTurns = () => {
  let availableTurns = [];
  for (let i = 1; i < 26; i++) {
    availableTurns.push(i);
  }
  return availableTurns;
};

const turns = [
  { idTurno: 1, fecha: "08/09/2022", idMedico: 10, idPatient: 1, idHour: "10" },
];
/*totalDay: {end: "17",start: "5"}
notTotalDay: {
       morning: {start: "3", end:"7"}, 
       afternoon: {start: "", end:""}
}*/
// [1,2,3,4,5,6,7,8,9,10]
export const validateRange = (hours) => {
  let totalTurns = createAllTurns();
  let availableTurns = [];
  if (hours.totalDay) {
    availableTurns = totalTurns.filter(
      (n) =>
        n >= parseInt(hours.totalDay.start) && n < parseInt(hours.totalDay.end)
    );
  } else if (hours.notTotalDay) {
    let morningTurns = [];
    let afternoonTurns = [];
    if (hours.notTotalDay.morning) {
      morningTurns = totalTurns.filter(
        (n) =>
          n >= parseInt(hours.notTotalDay.morning.start) &&
          n < parseInt(hours.notTotalDay.morning.end)
      );
    }
    if (hours.notTotalDay.afternoon) {
      afternoonTurns = totalTurns.filter(
        (n) =>
          n >= parseInt(hours.notTotalDay.afternoon.start) &&
          n < parseInt(hours.notTotalDay.afternoon.end)
      );
    }
    availableTurns = morningTurns.concat(afternoonTurns);
  }
  return availableTurns;
};

export const searchTurnByDate = (hours, turns, selectedDate) => {
  let turnsDate = turns.filter((turn) => turn.fecha === selectedDate); /// [{id: 1, fecha: ...}.... {..}, {}]
  return turnsDate;
};

export const searchTurnsAvailable = (hours, turns, selectedDate) => {
  let rangeTurns = validateRange(hours);
  let dateTurns = searchTurnByDate(hours, turns, selectedDate);
  let availableTurns = rangeTurns.filter((h) => h !== dateTurns.idHora);
  return availableTurns;
};
