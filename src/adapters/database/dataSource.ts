import { createClient } from "@supabase/supabase-js"

// Setup
const { SUPABASE_API_KEY = "", SUPABASE_PROJECT_ID = "" } = process.env

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  `https://${SUPABASE_PROJECT_ID}.supabase.co`,
  SUPABASE_API_KEY
)
