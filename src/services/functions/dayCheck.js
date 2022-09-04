export default function dayCheck(currentStamp, desiredStamp) {
  const locale = localStorage.getItem('i18nextLng') || 'en'
  if (currentStamp - desiredStamp < 86400) {
    return new Date(desiredStamp * 1000).toLocaleTimeString(locale)
  }
  return new Date(desiredStamp * 1000).toLocaleString(locale)
}

export function shortDayCheck(currentStamp, desiredStamp) {
  const locale = localStorage.getItem('i18nextLng') || 'en'
  const time = new Date(desiredStamp * 1000)
    .toLocaleTimeString(locale)
    .slice(0, -3)
  const date = new Date(desiredStamp * 1000)
    .toLocaleDateString(locale)
    .slice(0, -5)

  if (currentStamp - desiredStamp < 86400) {
    return time
  }

  return `${date} ${time}`
}
