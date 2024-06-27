// Types
import type { GenericErrors } from "./errors.js"

export const VALIDATION_ERROR_NAME = "ValidationError"

export enum ValidationErrorCauses {
  InvalidParameter = "InvalidParameter",
  OutOfBounds = "OutOfBounds",
  Unhandled = "Unhandled",
}

export type ValidationErrors = GenericErrors<ValidationErrorCauses>

export const validationErrors: ValidationErrors = {
  InvalidParameter: {
    cause: ValidationErrorCauses.InvalidParameter,
    message:
      "The request failed because it contained an invalid parameter or parameter value. Review the API documentation to determine which parameters are valid for your request.",
  },
  OutOfBounds: {
    cause: ValidationErrorCauses.OutOfBounds,
    message:
      "The request failed because it contained a parameter value that is not within the specified boundaries. Review the API documentation to determine which parameters are valid for your request.",
  },
  Unhandled: {
    cause: ValidationErrorCauses.Unhandled,
    message:
      "The API request is invalid or improperly formed. Consequently, the API server could not understand the request.",
  },
}
