//ARRAY TOTAL HOURS (de 8:00 a 20.30hrs)
/*export const createAllTurns = () => {
  let availableTurns = [];
  for (let i = 1; i < 26; i++) {
    availableTurns.push(i);
  }
  return availableTurns;
};*/

export const validateRange = (hours, totalHours) => {
  let totalTurns = totalHours;

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

export const searchTurnByDate = (turns, date, absentsDoctor, rangeTurns) => {
  let absent = validateAbsents(absentsDoctor, date, rangeTurns);

  let turnsDate = [];
  let turnsDateSelected = [];
  if (absent || Array.isArray(absent)) {
    console.log("entre");
    turnsDate = turns.filter((turn) => turn.date === date.toLocaleDateString()); /// [{id: 1, fecha: ...}.... {..}, {}]
    let turnsDateHours = turnsDate.map((e) => e.hours_workings[0].hour);
    if (Array.isArray(absent)) {
      absent.forEach((i) => {
        if (!turnsDateHours.find((e) => e === i)) {
          turnsDateSelected.push(i);
        }
      });
    }
  } else {
    turnsDateSelected = rangeTurns.map((e) => e.hour);
  }

  return turnsDateSelected;
};

export const validateAbsents = (absentsDoctor, date, rangeTurns) => {
  let result = true;
  for (let i = 0; i < absentsDoctor.length; i++) {
    if (absentsDoctor[i].extended) {
      let startDate = absentsDoctor[i].extended.start.split("/");
      startDate = new Date(
        parseInt(startDate[2]),
        parseInt(startDate[1] - 1),
        parseInt(startDate[0])
      );

      let endDate = absentsDoctor[i].extended.end.split("/");
      endDate = new Date(
        parseInt(endDate[2]),
        parseInt(endDate[1] - 1),
        parseInt(endDate[0])
      );

      if (
        date.getTime() >= startDate.getTime() &&
        date.getTime() <= endDate.getTime()
      ) {
        result = false;
      }
    } else if (absentsDoctor[i].totalDay) {
      let absentDate = absentsDoctor[i].totalDay.date;

      if (absentDate === date.toLocaleDateString()) {
        result = false;
      }
    } else if (absentsDoctor[i].notTotalDay) {
      let absentDate = absentsDoctor[i].notTotalDay.date;
      if (absentDate === date.toLocaleDateString()) {
        result = absentsDoctor[i].notTotalDay.hours;
      }
    }
  }
  return result;
};

export const searchTurnsAvailable = (
  hours,
  totalHours,
  totalTurns,
  date,
  absentsDoctor
) => {
  let rangeTurns = validateRange(hours, totalHours); //rango horario disponible
  let dateTurns = searchTurnByDate(totalTurns, date, absentsDoctor, rangeTurns); //[{},{}] dateTurns.map(e => e.hours_working[0].hour))

  let availableTurns = [];

  rangeTurns.forEach((i) => {
    if (!dateTurns.find((e) => e === i.hour)) {
      availableTurns.push(i);
    }
  });

  return availableTurns;
};
