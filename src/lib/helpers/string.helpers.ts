const MIN_CHAR_PASSWORD = 3

export const validateEmail = (val: string) => {
  const regex = new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:[.][a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?[.])+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  )

  return regex.test(val)
}

/**
 * Replace all but the first X given characters with "*"
 */
export const obfuscateEmail = (val: string) => {
  if (!validateEmail(val)) return null

  const [name, domain] = val.split("@")

  if (!name || !domain || name.length < MIN_CHAR_PASSWORD) return null

  return `${name[0]}${name[1]}***${name[name.length - 1]}@${domain}`
}
