export function getLocalIconPath(
  folder: string,
  icon: string | undefined,
  type?: string
) {
  if (!icon) {
    return undefined;
  }

  return new URL(
    `../assets/icons/${folder}/${icon}.${type || "svg"}`,
    import.meta.url
  ).href;
}

export function getLocalImgPath(folder: string, img?: string, type?: string) {
  if (!img) {
    return undefined;
  }
  return new URL(
    `../assets/imgs/${folder}/${img}.${type || "svg"}`,
    import.meta.url
  ).href;
}
