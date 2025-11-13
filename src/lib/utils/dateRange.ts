export function getPreviousMonthRange() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const endOfPrevMonth = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999)); // last day of previous month

  return {endOfPrevMonth};
}