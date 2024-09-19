// Types
import type { GenericErrors } from "@ts/errors.types.js"

export const SERVICE_ERROR_NAME = "ServiceError"

export enum ServiceErrorCauses {
  NotFound = "NotFound",
  Unhandled = "Unhandled",
}

export type ServiceErrors = GenericErrors<ServiceErrorCauses>

export const serviceErrors: ServiceErrors = {
  NotFound: {
    cause: ServiceErrorCauses.NotFound,
    message:
      "The requested operation failed because a resource associated with the request could not be found.",
  },
  Unhandled: {
    cause: ServiceErrorCauses.Unhandled,
    message: "The request failed due to an internal error.",
  },
}
