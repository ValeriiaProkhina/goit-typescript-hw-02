/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum daysOfTheWeek {
  monday = "monday",
  tuesday = "tuesday",
  wednesday ="wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}

function isWeekend (day: daysOfTheWeek):boolean {
  if (day === daysOfTheWeek.saturday || day === daysOfTheWeek.sunday) {
    return true;
  } return false;
}