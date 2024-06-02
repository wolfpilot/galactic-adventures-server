export const SERVICE_ERROR_NAME = "ServiceError"

export enum ServiceErrorReasons {
  Unhandled = "Unhandled",
}

export interface ServiceError {
  reason: ServiceErrorReasons
  message: string
}

export type ServiceErrors = Record<
  keyof typeof ServiceErrorReasons,
  ServiceError
>

export const serviceErrors: ServiceErrors = {
  Unhandled: {
    reason: ServiceErrorReasons.Unhandled,
    message: "The request failed due to an internal error.",
  },
}
