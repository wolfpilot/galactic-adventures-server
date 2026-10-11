import { createClient } from "@supabase/supabase-js"

// Types
import type { Database } from "./supabase.schema.js"

// Setup
const { SUPABASE_API_KEY = "", SUPABASE_URL = "" } = process.env

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_API_KEY)
