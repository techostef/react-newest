export function getNextYear () {
  const nextYear = new Date();
  const current = new Date();
  nextYear.setFullYear(current.getFullYear() + 1);

  return nextYear;
}