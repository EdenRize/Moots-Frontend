export function getLocalIconPath(
  folder: string,
  icon: string,
  type?: string
): string {


  return new URL(
    `../assets/icons/${folder}/${icon}.${type || "svg"}`,
    import.meta.url
  ).href
}

export function getLocalImgPath(folder: string, img: string, type?: string): string {
  return new URL(
    `../assets/imgs/${folder}/${img}.${type || "svg"}`,
    import.meta.url
  ).href
}

export function hasVerticalScroll() {
  const html = document.querySelector('html')
  if (html)
    return html.scrollHeight > html.clientHeight
}


export function timestampToFormattedDate(timestamp: number): string {
  const date = new Date(timestamp)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export function getFormattedTimePassed(timestamp: number): string {
  const currentDate = new Date()
  const inputDate = new Date(timestamp)

  const timeDifference = currentDate.getTime() - inputDate.getTime()
  const seconds = Math.floor(timeDifference / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) {
    if (days > 6) return timestampToFormattedDate(timestamp)
    return `לפני ${days > 1 ? `${days} ימים` : 'יום'}`
  } else if (hours > 0) {
    return `לפני ${hours > 1 ? `${hours} שעות` : 'שעה'}`
  } else if (minutes > 0) {
    return `לפני ${minutes > 1 ? `${minutes} דקות` : 'דקה'}`
  } else {
    return 'ממש עכשיו'
  }
}

export function getAgeString(timestamp: number | undefined): string | null {
  if (!timestamp) return null

  const millisecondsPerDay = 1000 * 60 * 60 * 24
  const millisecondsPerYear = millisecondsPerDay * 365.25 // Approximation for leap years
  const millisecondsPerMonth = millisecondsPerYear / 12 // Approximation for months

  const currentDate = new Date()
  const birthDate = new Date(timestamp)

  const ageInMilliseconds = currentDate.getTime() - birthDate.getTime()
  const ageInYears = Math.floor(ageInMilliseconds / millisecondsPerYear)
  const remainingMillisecondsAfterYears = ageInMilliseconds % millisecondsPerYear
  const ageInMonths = Math.floor(remainingMillisecondsAfterYears / millisecondsPerMonth)
  const remainingMillisecondsAfterMonths = remainingMillisecondsAfterYears % millisecondsPerMonth
  const ageInDays = Math.floor(remainingMillisecondsAfterMonths / millisecondsPerDay)

  let ageString = ""

  if (ageInYears > 0) {
    ageString += ageInYears === 1 ? "שנה" : ageInYears + " שנים"
  }

  if (ageInMonths > 0) {
    if (ageString !== "") {
      ageString += " ו-"
    }
    ageString += ageInMonths === 1 ? "חודש" : ageInMonths + " חודשים"
  }

  if (ageInDays > 0 && ageString === "") {
    ageString += ageInDays === 1 ? "יום" : ageInDays + " ימים"
  }

  if (ageString === "") {
    ageString = "פחות מיום"
  }

  return ageString
}
