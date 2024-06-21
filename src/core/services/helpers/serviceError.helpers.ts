import type { PostgrestError } from "@supabase/supabase-js"

// Helpers
import { ServiceError } from "@helpers/errorHelper.js"

/**
 * Handle individual PG errors
 *
 * @see https://postgrest.org/en/v12/references/errors.html
 */
export const parsePgError = (error: PostgrestError): ServiceError => {
  switch (error.code) {
    case "PGRST116":
      return new ServiceError("NotFound")
    default:
      return new ServiceError("Unhandled")
  }
}
