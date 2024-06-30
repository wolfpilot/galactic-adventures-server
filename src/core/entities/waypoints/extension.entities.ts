// Types
import type { ExtWayAtmospheresModel } from "@database/repositories/models/extensions.models.js"

export type ExtWayAtmospheres = Pick<
  ExtWayAtmospheresModel,
  | "type"
  | "co2_pct"
  | "n2_pct"
  | "o2_pct"
  | "ar_pct"
  | "ch4_pct"
  | "na_pct"
  | "h2_pct"
  | "he_pct"
>
