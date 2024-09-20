import { CustomError } from "ts-custom-error"

// Constants
import {
  HttpStatusNames,
  httpErrors,
} from "@constants/errors/httpErrors.constants.js"
import {
  VALIDATION_ERROR_NAME,
  ValidationErrorCauses,
  validationErrors,
} from "@constants/errors/validationErrors.constants.js"
import {
  SERVICE_ERROR_NAME,
  ServiceErrorCauses,
  serviceErrors,
} from "@constants/errors/serviceErrors.constants.js"
import {
  REPOSITORY_ERROR_NAME,
  RepositoryErrorCauses,
  repositoryErrors,
} from "@constants/errors/repositoryErrors.constants.js"

/**
 * Default is set to 500 Internal Server Error.
 *
 * If a "name" argument is passed, new defaults will be selected from a pre-existing config
 * of status codes where the name, status and message will be populated automatically.
 *
 * However if a custom "message" argument is passed, it will instead overwrite any other default.
 */
export class HttpError extends CustomError {
  public ok: boolean

  constructor(cause: keyof typeof HttpStatusNames, message?: string) {
    const err = httpErrors[cause]

    super()

    /**
     * Workaround for assigning the custom error name property.
     *
     * @see https://github.com/adriengibrat/ts-custom-error/issues/53#issuecomment-679403993
     */
    Object.defineProperty(this, "name", {
      value: err.name || httpErrors.InternalServerError.name,
    })

    this.ok = false
    this.message =
      message || err.message || httpErrors.InternalServerError.message
  }
}

export class ValidationError extends CustomError {
  constructor(cause: keyof typeof ValidationErrorCauses, message?: string) {
    const err = validationErrors[cause]

    super()

    Object.defineProperty(this, "name", {
      value: VALIDATION_ERROR_NAME,
    })

    this.cause = cause || err.cause || validationErrors.Unhandled.cause
    this.message = message || err.message || validationErrors.Unhandled.message
  }
}

export class ServiceError extends CustomError {
  constructor(cause: keyof typeof ServiceErrorCauses, message?: string) {
    const err = serviceErrors[cause]

    super()

    Object.defineProperty(this, "name", {
      value: SERVICE_ERROR_NAME,
    })

    this.cause = cause || err.cause || serviceErrors.Unhandled.cause
    this.message = message || err.message || serviceErrors.Unhandled.message
  }
}

export class RepositoryError extends CustomError {
  constructor(cause: keyof typeof RepositoryErrorCauses, message?: string) {
    const err = repositoryErrors[cause]

    super()

    Object.defineProperty(this, "name", {
      value: REPOSITORY_ERROR_NAME,
    })

    this.cause = cause || err.cause || repositoryErrors.Unhandled.cause
    this.message = message || err.message || repositoryErrors.Unhandled.message
  }
}
