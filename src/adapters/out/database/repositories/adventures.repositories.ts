// Database
import { supabase } from "@database/dataSource.js"

// Ports
import type { AdventuresRepositoryPort } from "@ports/adventures.ports.js"

// Helpers
import { parsePgError } from "@database/lib/helpers/error.helpers.js"

export class AdventuresRepository implements AdventuresRepositoryPort {
  async findWithWaypointById(id: number) {
    const { error, data } = await supabase
      .from("prd_adventures")
      .select(
        `
          id,
          description,
          price,
          waypoint:waypoints!prd_adventures_waypoint_id_fkey(
            id,
            parent_id,
            code,
            name,
            category
          )
        `
      )
      .eq("id", id)
      .single()

    if (error) {
      const parsedError = parsePgError(error)

      return parsedError.cause === "NotFound"
        ? Promise.resolve(null)
        : Promise.reject(parsedError)
    }

    return Promise.resolve(data)
  }
}
