export interface GenericError<T> {
  cause: T
  message: string
}

export type GenericErrors<T extends string> = Record<T, GenericError<T>>
