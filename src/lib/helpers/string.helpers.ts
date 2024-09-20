/**
 * Replace all but the first X given characters with "*"
 */
export const obfuscateEmail = (val: string) =>
  val.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2")
