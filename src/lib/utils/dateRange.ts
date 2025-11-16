export function getPreviousMonthRange() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const endOfPrevMonth = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999)); // last day of previous month

  return {endOfPrevMonth};
}

export function getDateString(timeStamp:Date){
  const date= new Date(Number(timeStamp));
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const year = date.getUTCFullYear();

  const formattedDate = `${month}/${day}/${year}`;
  return formattedDate
}