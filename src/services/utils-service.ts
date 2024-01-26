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

export function getLocalImgPath(folder: string, icon?: string, type?: string) {
  if (!icon) {
    return undefined;
  }
  return new URL(
    `../assets/imgs/${folder}/${icon}.${type || "svg"}`,
    import.meta.url
  ).href;
}
