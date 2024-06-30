export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ext_way_atmospheres: {
        Row: {
          ar_pct: number | null
          ch4_pct: number | null
          co2_pct: number | null
          created_at: string
          h2_pct: number | null
          he_pct: number | null
          id: number
          n2_pct: number | null
          na_pct: number | null
          o2_pct: number | null
          type: Database["public"]["Enums"]["AtmosphereType"] | null
          updated_at: string | null
          waypoint_code: string
          waypoint_id: number
        }
        Insert: {
          ar_pct?: number | null
          ch4_pct?: number | null
          co2_pct?: number | null
          created_at?: string
          h2_pct?: number | null
          he_pct?: number | null
          id?: number
          n2_pct?: number | null
          na_pct?: number | null
          o2_pct?: number | null
          type?: Database["public"]["Enums"]["AtmosphereType"] | null
          updated_at?: string | null
          waypoint_code: string
          waypoint_id: number
        }
        Update: {
          ar_pct?: number | null
          ch4_pct?: number | null
          co2_pct?: number | null
          created_at?: string
          h2_pct?: number | null
          he_pct?: number | null
          id?: number
          n2_pct?: number | null
          na_pct?: number | null
          o2_pct?: number | null
          type?: Database["public"]["Enums"]["AtmosphereType"] | null
          updated_at?: string | null
          waypoint_code?: string
          waypoint_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "ext_way_atmospheres_waypoint_code_fkey"
            columns: ["waypoint_code"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "ext_way_atmospheres_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
        ]
      }
      meta_star_spectral_classes: {
        Row: {
          chromacity: string | null
          class: Database["public"]["Enums"]["StarSpectralClass"]
          created_at: string
          id: number
          temperature_max_k: number | null
          temperature_min_k: number | null
          updated_at: string
        }
        Insert: {
          chromacity?: string | null
          class: Database["public"]["Enums"]["StarSpectralClass"]
          created_at?: string
          id?: number
          temperature_max_k?: number | null
          temperature_min_k?: number | null
          updated_at?: string
        }
        Update: {
          chromacity?: string | null
          class?: Database["public"]["Enums"]["StarSpectralClass"]
          created_at?: string
          id?: number
          temperature_max_k?: number | null
          temperature_min_k?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      prd_adventures: {
        Row: {
          created_at: string | null
          description: string
          id: number
          price_sb: number
          updated_at: string | null
          waypoint_code: string
          waypoint_id: number
        }
        Insert: {
          created_at?: string | null
          description?: string
          id?: number
          price_sb: number
          updated_at?: string | null
          waypoint_code: string
          waypoint_id: number
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
          price_sb?: number
          updated_at?: string | null
          waypoint_code?: string
          waypoint_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "prd_adventures_waypoint_code_fkey"
            columns: ["waypoint_code"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "prd_adventures_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
        ]
      }
      prd_merchandise: {
        Row: {
          created_at: string
          id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      prd_tours: {
        Row: {
          created_at: string
          id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      way_clusters: {
        Row: {
          constellations: string[] | null
          created_at: string
          id: number
          updated_at: string | null
          waypoint_code: string
          waypoint_id: number
        }
        Insert: {
          constellations?: string[] | null
          created_at?: string
          id?: number
          updated_at?: string | null
          waypoint_code: string
          waypoint_id: number
        }
        Update: {
          constellations?: string[] | null
          created_at?: string
          id?: number
          updated_at?: string | null
          waypoint_code?: string
          waypoint_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "clusters_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "way_clusters_waypoint_code_fkey"
            columns: ["waypoint_code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
        ]
      }
      way_galaxies: {
        Row: {
          created_at: string | null
          emissions: Database["public"]["Enums"]["GalaxyEmissions"]
          id: number
          shape: Database["public"]["Enums"]["GalaxyShape"]
          updated_at: string | null
          waypoint_code: string
          waypoint_id: number
        }
        Insert: {
          created_at?: string | null
          emissions: Database["public"]["Enums"]["GalaxyEmissions"]
          id?: number
          shape: Database["public"]["Enums"]["GalaxyShape"]
          updated_at?: string | null
          waypoint_code: string
          waypoint_id: number
        }
        Update: {
          created_at?: string | null
          emissions?: Database["public"]["Enums"]["GalaxyEmissions"]
          id?: number
          shape?: Database["public"]["Enums"]["GalaxyShape"]
          updated_at?: string | null
          waypoint_code?: string
          waypoint_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "galaxies_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "way_galaxies_waypoint_code_fkey"
            columns: ["waypoint_code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
        ]
      }
      way_nebulae: {
        Row: {
          age_y: number
          composition: Database["public"]["Enums"]["NebulaComposition"]
          created_at: string
          id: number
          temp_avg_k: number
          type: Database["public"]["Enums"]["NebulaType"]
          updated_at: string | null
          waypoint_code: string
          waypoint_id: number | null
        }
        Insert: {
          age_y: number
          composition: Database["public"]["Enums"]["NebulaComposition"]
          created_at?: string
          id?: number
          temp_avg_k: number
          type: Database["public"]["Enums"]["NebulaType"]
          updated_at?: string | null
          waypoint_code: string
          waypoint_id?: number | null
        }
        Update: {
          age_y?: number
          composition?: Database["public"]["Enums"]["NebulaComposition"]
          created_at?: string
          id?: number
          temp_avg_k?: number
          type?: Database["public"]["Enums"]["NebulaType"]
          updated_at?: string | null
          waypoint_code?: string
          waypoint_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nebulas_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "way_nebulae_waypoint_code_fkey"
            columns: ["waypoint_code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
        ]
      }
      way_planets: {
        Row: {
          composition: Database["public"]["Enums"]["SurfaceComposition"]
          created_at: string
          day_length_h: number
          diameter_km: number
          ext_atmosphere_id: number | null
          geological_activity:
            | Database["public"]["Enums"]["GeologicalActivity"][]
            | null
          gravity_n: number
          id: number
          is_habitable: boolean
          orbital_period_d: number
          precipitation_level: Database["public"]["Enums"]["PrecipitationLevel"]
          precipitation_types: string[] | null
          size: Database["public"]["Enums"]["PlanetSize"]
          surface_temp_avg_k: number
          updated_at: string | null
          waypoint_code: string
          waypoint_id: number | null
          weather_alerts: string[] | null
          wind_gust_max_kmh: number
          wind_speed_avg_kmh: number
        }
        Insert: {
          composition: Database["public"]["Enums"]["SurfaceComposition"]
          created_at?: string
          day_length_h: number
          diameter_km: number
          ext_atmosphere_id?: number | null
          geological_activity?:
            | Database["public"]["Enums"]["GeologicalActivity"][]
            | null
          gravity_n: number
          id?: number
          is_habitable?: boolean
          orbital_period_d: number
          precipitation_level?: Database["public"]["Enums"]["PrecipitationLevel"]
          precipitation_types?: string[] | null
          size: Database["public"]["Enums"]["PlanetSize"]
          surface_temp_avg_k: number
          updated_at?: string | null
          waypoint_code: string
          waypoint_id?: number | null
          weather_alerts?: string[] | null
          wind_gust_max_kmh?: number
          wind_speed_avg_kmh?: number
        }
        Update: {
          composition?: Database["public"]["Enums"]["SurfaceComposition"]
          created_at?: string
          day_length_h?: number
          diameter_km?: number
          ext_atmosphere_id?: number | null
          geological_activity?:
            | Database["public"]["Enums"]["GeologicalActivity"][]
            | null
          gravity_n?: number
          id?: number
          is_habitable?: boolean
          orbital_period_d?: number
          precipitation_level?: Database["public"]["Enums"]["PrecipitationLevel"]
          precipitation_types?: string[] | null
          size?: Database["public"]["Enums"]["PlanetSize"]
          surface_temp_avg_k?: number
          updated_at?: string | null
          waypoint_code?: string
          waypoint_id?: number | null
          weather_alerts?: string[] | null
          wind_gust_max_kmh?: number
          wind_speed_avg_kmh?: number
        }
        Relationships: [
          {
            foreignKeyName: "planets_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "way_planets_ext_atmosphere_id_fkey"
            columns: ["ext_atmosphere_id"]
            isOneToOne: false
            referencedRelation: "ext_way_atmospheres"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "way_planets_waypoint_code_fkey"
            columns: ["waypoint_code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
        ]
      }
      way_satellites: {
        Row: {
          composition: Database["public"]["Enums"]["SurfaceComposition"]
          created_at: string
          day_length_h: number
          diameter_km: number
          ext_atmosphere_id: number | null
          geological_activity:
            | Database["public"]["Enums"]["GeologicalActivity"][]
            | null
          gravity_n: number
          id: number
          orbital_period_d: number
          precipitation_level: Database["public"]["Enums"]["PrecipitationLevel"]
          precipitation_types: string[] | null
          size: Database["public"]["Enums"]["SatelliteSize"]
          surface_temp_avg_k: number
          updated_at: string | null
          waypoint_code: string
          waypoint_id: number
          weather_alerts: string[] | null
          wind_gust_max_kmh: number
          wind_speed_avg_kmh: number
        }
        Insert: {
          composition: Database["public"]["Enums"]["SurfaceComposition"]
          created_at?: string
          day_length_h: number
          diameter_km: number
          ext_atmosphere_id?: number | null
          geological_activity?:
            | Database["public"]["Enums"]["GeologicalActivity"][]
            | null
          gravity_n: number
          id?: number
          orbital_period_d: number
          precipitation_level?: Database["public"]["Enums"]["PrecipitationLevel"]
          precipitation_types?: string[] | null
          size: Database["public"]["Enums"]["SatelliteSize"]
          surface_temp_avg_k: number
          updated_at?: string | null
          waypoint_code: string
          waypoint_id: number
          weather_alerts?: string[] | null
          wind_gust_max_kmh?: number
          wind_speed_avg_kmh?: number
        }
        Update: {
          composition?: Database["public"]["Enums"]["SurfaceComposition"]
          created_at?: string
          day_length_h?: number
          diameter_km?: number
          ext_atmosphere_id?: number | null
          geological_activity?:
            | Database["public"]["Enums"]["GeologicalActivity"][]
            | null
          gravity_n?: number
          id?: number
          orbital_period_d?: number
          precipitation_level?: Database["public"]["Enums"]["PrecipitationLevel"]
          precipitation_types?: string[] | null
          size?: Database["public"]["Enums"]["SatelliteSize"]
          surface_temp_avg_k?: number
          updated_at?: string | null
          waypoint_code?: string
          waypoint_id?: number
          weather_alerts?: string[] | null
          wind_gust_max_kmh?: number
          wind_speed_avg_kmh?: number
        }
        Relationships: [
          {
            foreignKeyName: "satellites_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "way_satellites_ext_atmosphere_id_fkey"
            columns: ["ext_atmosphere_id"]
            isOneToOne: false
            referencedRelation: "ext_way_atmospheres"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "way_satellites_waypoint_code_fkey"
            columns: ["waypoint_code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
        ]
      }
      way_stars: {
        Row: {
          created_at: string
          ext_atmosphere_id: number | null
          id: number
          life_cycle: Database["public"]["Enums"]["StarLifeCycle"]
          mass: Database["public"]["Enums"]["StarMass"]
          spectral_class_id: number
          updated_at: string | null
          waypoint_code: string
          waypoint_id: number | null
        }
        Insert: {
          created_at?: string
          ext_atmosphere_id?: number | null
          id?: number
          life_cycle: Database["public"]["Enums"]["StarLifeCycle"]
          mass: Database["public"]["Enums"]["StarMass"]
          spectral_class_id: number
          updated_at?: string | null
          waypoint_code: string
          waypoint_id?: number | null
        }
        Update: {
          created_at?: string
          ext_atmosphere_id?: number | null
          id?: number
          life_cycle?: Database["public"]["Enums"]["StarLifeCycle"]
          mass?: Database["public"]["Enums"]["StarMass"]
          spectral_class_id?: number
          updated_at?: string | null
          waypoint_code?: string
          waypoint_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "way_stars_ext_atmosphere_id_fkey"
            columns: ["ext_atmosphere_id"]
            isOneToOne: false
            referencedRelation: "ext_way_atmospheres"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "way_stars_spectral_class_id_fkey"
            columns: ["spectral_class_id"]
            isOneToOne: false
            referencedRelation: "meta_star_spectral_classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "way_stars_waypoint_code_fkey"
            columns: ["waypoint_code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "way_stars_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
        ]
      }
      way_superclusters: {
        Row: {
          created_at: string | null
          id: number
          morphology: Database["public"]["Enums"]["SuperclusterMorphology"]
          updated_at: string | null
          waypoint_code: string
          waypoint_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          morphology: Database["public"]["Enums"]["SuperclusterMorphology"]
          updated_at?: string | null
          waypoint_code: string
          waypoint_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          morphology?: Database["public"]["Enums"]["SuperclusterMorphology"]
          updated_at?: string | null
          waypoint_code?: string
          waypoint_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "superclusters_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "way_superclusters_waypoint_code_fkey"
            columns: ["waypoint_code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
        ]
      }
      way_systems: {
        Row: {
          created_at: string | null
          id: number
          is_enabled: boolean | null
          is_inhabited: boolean
          type: Database["public"]["Enums"]["SystemType"]
          updated_at: string | null
          waypoint_code: string
          waypoint_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_enabled?: boolean | null
          is_inhabited?: boolean
          type: Database["public"]["Enums"]["SystemType"]
          updated_at?: string | null
          waypoint_code: string
          waypoint_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_enabled?: boolean | null
          is_inhabited?: boolean
          type?: Database["public"]["Enums"]["SystemType"]
          updated_at?: string | null
          waypoint_code?: string
          waypoint_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "systems_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "way_systems_waypoint_code_fkey"
            columns: ["waypoint_code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
        ]
      }
      waypoints: {
        Row: {
          category: Database["public"]["Enums"]["WaypointCategory"]
          code: string
          created_at: string | null
          id: number
          img_id: string | null
          name: string
          parent_id: number | null
          updated_at: string | null
        }
        Insert: {
          category: Database["public"]["Enums"]["WaypointCategory"]
          code: string
          created_at?: string | null
          id?: number
          img_id?: string | null
          name: string
          parent_id?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: Database["public"]["Enums"]["WaypointCategory"]
          code?: string
          created_at?: string | null
          id?: number
          img_id?: string | null
          name?: string
          parent_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nodes_3_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      AtmosphereType: "None" | "Thick" | "Thin" | "Exotic"
      GalaxyEmissions: "Quiescent" | "Active"
      GalaxyShape:
        | "Spiral"
        | "Elliptical"
        | "Lenticular"
        | "Peculiar"
        | "Irregular"
      GeologicalActivity: "Volcanic" | "Tectonic" | "Tidal" | "Geyser"
      NebulaComposition: "Hydrogen-rich" | "Molecular" | "Dust-rich"
      NebulaType:
        | "Emission"
        | "Reflection"
        | "Dark"
        | "Planetary"
        | "Supernova Remnant"
      PlanetSize: "Supergiant" | "Giant" | "Super" | "Standard" | "Dwarf"
      PrecipitationLevel: "None" | "Low" | "Moderate" | "High" | "Continuous"
      SatelliteSize: "Small" | "Medium" | "Large"
      StarLifeCycle:
        | "Protostar"
        | "Main Sequence"
        | "Red Giant"
        | "Red Supergiant"
        | "Planetary Nebula"
        | "White Dwarf"
        | "Black Dwarf"
        | "Supernova"
        | "Black Hole"
        | "Neutron Star"
        | "Pulsar"
      StarMass: "Low" | "Intermediate" | "High"
      StarSpectralClass: "O" | "B" | "A" | "F" | "G" | "K" | "M"
      SuperclusterMorphology: "Spider" | "Filament" | "Field"
      SurfaceComposition:
        | "Gas"
        | "Terrestrial"
        | "Rocky"
        | "Desert"
        | "Water"
        | "Ice"
        | "Iron"
        | "Lava"
        | "Volcanic"
        | "Silicate"
      SystemType: "Star" | "Planetary"
      WaypointCategory:
        | "Supercluster"
        | "Cluster"
        | "Galaxy"
        | "Nebula"
        | "System"
        | "Star"
        | "Planet"
        | "Satellite"
      WaypointTableName:
        | "way_superclusters"
        | "way_clusters"
        | "way_galaxies"
        | "way_nebulae"
        | "way_systems"
        | "way_stars"
        | "way_planets"
        | "way_satellites"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
