// Types
import type { GenericErrors } from "./errors.js"

export const REPOSITORY_ERROR_NAME = "RepositoryError"

export enum RepositoryErrorCauses {
  NotFound = "NotFound",
  Unhandled = "Unhandled",
}

export type RepositoryErrors = GenericErrors<RepositoryErrorCauses>

export const repositoryErrors: GenericErrors<RepositoryErrorCauses> = {
  NotFound: {
    cause: RepositoryErrorCauses.NotFound,
    message:
      "The requested operation failed because a resource associated with the request could not be found.",
  },
  Unhandled: {
    cause: RepositoryErrorCauses.Unhandled,
    message: "The request failed due to an internal error.",
  },
}
