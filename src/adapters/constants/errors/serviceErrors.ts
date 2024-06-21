export const SERVICE_ERROR_NAME = "ServiceError"

export enum ServiceErrorReasons {
  NotFound = "NotFound",
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
  NotFound: {
    reason: ServiceErrorReasons.NotFound,
    message:
      "The requested operation failed because a resource associated with the request could not be found.",
  },
  Unhandled: {
    reason: ServiceErrorReasons.Unhandled,
    message: "The request failed due to an internal error.",
  },
}
