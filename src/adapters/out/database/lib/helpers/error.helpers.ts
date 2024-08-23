import type { PostgrestError } from "@supabase/supabase-js"

// Helpers
import { RepositoryError } from "@helpers/errorHelper.js"

/**
 * Handle individual PG errors
 *
 * @see https://postgrest.org/en/v12/references/errors.html
 */
export const parsePgError = (error: PostgrestError): RepositoryError => {
  switch (error.code) {
    case "PGRST116":
      return new RepositoryError("NotFound")
    default:
      return new RepositoryError("Unhandled")
  }
}
