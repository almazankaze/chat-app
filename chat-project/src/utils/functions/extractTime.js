export function extractTime(dateString) {
  const date = new Date(dateString);
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const year = padZero(date.getFullYear());
  const hours = padZero(date.getHours() - 12);
  const minutes = padZero(date.getMinutes());

  let period = "am";
  if (date.getHours() >= 12) period = "pm";

  return `${hours}:${minutes}${period} ${month}-${day}-${year}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
