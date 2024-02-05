export function getLocalIconPath(
  folder: string,
  icon: string,
  type?: string
): string {


  return new URL(
    `../assets/icons/${folder}/${icon}.${type || "svg"}`,
    import.meta.url
  ).href;
}

export function getLocalImgPath(folder: string, img: string, type?: string): string {
  return new URL(
    `../assets/imgs/${folder}/${img}.${type || "svg"}`,
    import.meta.url
  ).href;
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