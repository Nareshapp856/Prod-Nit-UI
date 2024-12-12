export function formatDateToLocal(date) {
  const year = date?.getFullYear();
  const month = String(date?.getMonth() + 1).padStart(2, "0");
  const day = String(date?.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formateDateWithTime(date) {
  const formatedDate = formatDateToLocal(date);

  // Get the hours and determine AM or PM
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Pad minutes with leading zero if needed
  const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;

  return `${formatedDate} ${hours}:${minutesFormatted} ${ampm}`;
}
