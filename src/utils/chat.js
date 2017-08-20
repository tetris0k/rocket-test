export const addDatesToMessagesArray = messages => {
  if (messages.length === 0) {
    return [];
  }
  const sortedMessages = messages.sort((a, b) => a.createdAt <= b.createdAt);
  let currentDate = null;
  let isNewDate = true;
  let currentYear = null;
  let currentMonth = null;
  let currentDay = null;
  let arrayWithDates = [];
  for (let i = sortedMessages.length - 1; i > -1; i--) {
    currentDate = sortedMessages[i].createdAt;
    isNewDate = !(currentDate.getUTCDate() === currentDay &&
      currentDate.getUTCMonth() === currentMonth &&
      currentDate.getUTCFullYear() === currentYear);
    if (i === sortedMessages.length - 1 || isNewDate) {
      currentDay = currentDate.getUTCDate();
      currentMonth = currentDate.getUTCMonth();
      currentYear = currentDate.getUTCFullYear();
      arrayWithDates.push({
        isDate: true,
        day: currentDay < 10 ? `0${currentDay}` : currentDay,
        month: currentMonth < 9 ? `0${currentMonth + 1}` : currentMonth + 1,
        year: currentYear,
        id: -Math.random(100000)
      }, sortedMessages[i]);
    } else {
      arrayWithDates.push(sortedMessages[i]);
    }
  }
  return arrayWithDates.reverse();
};
