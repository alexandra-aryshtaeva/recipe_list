export function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  let year = date.getFullYear();
  let fullDate = `${day}-${month}-${year}`;
  return fullDate;
}
