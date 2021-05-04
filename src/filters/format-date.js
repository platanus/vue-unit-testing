/* eslint-disable no-magic-numbers */
export default function formatDate(date) {
  if (!date) return null;

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${day}/${month}/${year} ${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
