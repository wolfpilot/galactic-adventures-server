// Types
import type { DestinationsGetAll, DestinationsGetById } from "./types.js"

// Database
import { supabase } from "@database/dataSource.js"

// Helper
import { ServiceError } from "@helpers/errorHelper.js"

export const destinationsGetAll: DestinationsGetAll = async () => {
  try {
    const { error, data } = await supabase
      .from("destinations")
      .select(`*, systems("*")`)
      .order("id")

    if (error) {
      console.error(error)

      return Promise.reject(new ServiceError("Unhandled"))
    }

    return Promise.resolve(data)
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error)
    }

    return Promise.reject(new ServiceError("Unhandled"))
  }
}

export const destinationsGetById: DestinationsGetById = async ({ id }) => {
  try {
    const { error, data } = await supabase
      .from("destinations")
      .select(`*, systems("*")`)
      .eq("id", id)
      .single()

    if (error) {
      console.error(error)

      return Promise.reject(new ServiceError("Unhandled"))
    }
    return Promise.resolve(data)
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error)
    }

    return Promise.reject(new ServiceError("Unhandled"))
  }
}
