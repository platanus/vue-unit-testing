/* eslint-disable no-magic-numbers */
export default function formatDate(date) {
  if (!date || !(date instanceof Date)) return null;

  const day = date.getDate();
  const month = (date.getMonth() + 1).toString().padStart(2, 0);
  const year = date.getFullYear();
  const hour = date.getHours().toString().padStart(2, 0);
  const minutes = date.getMinutes().toString().padStart(2, 0);

  return `${day}/${month}/${year} ${hour}:${minutes}`;
}
