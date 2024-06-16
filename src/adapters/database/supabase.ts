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
      destinations: {
        Row: {
          category: Database["public"]["Enums"]["WaypointCategory"] | null
          code: string
          description: string
          id: number
          isDefault: boolean
          name: string
          price: number
        }
        Insert: {
          category?: Database["public"]["Enums"]["WaypointCategory"] | null
          code: string
          description?: string
          id?: number
          isDefault?: boolean
          name: string
          price: number
        }
        Update: {
          category?: Database["public"]["Enums"]["WaypointCategory"] | null
          code?: string
          description?: string
          id?: number
          isDefault?: boolean
          name?: string
          price?: number
        }
        Relationships: []
      }
      prd_adventures: {
        Row: {
          code: string
          created_at: string | null
          description: string
          id: number
          price: number
          updated_at: string | null
          waypoint_id: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description?: string
          id?: number
          price: number
          updated_at?: string | null
          waypoint_id: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          id?: number
          price?: number
          updated_at?: string | null
          waypoint_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "prd_adventures_code_fkey"
            columns: ["code"]
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
          update_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          update_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          update_at?: string | null
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
          code: string
          constellations: string[] | null
          created_at: string
          id: number
          updated_at: string | null
          waypoint_id: number
        }
        Insert: {
          code: string
          constellations?: string[] | null
          created_at?: string
          id?: number
          updated_at?: string | null
          waypoint_id: number
        }
        Update: {
          code?: string
          constellations?: string[] | null
          created_at?: string
          id?: number
          updated_at?: string | null
          waypoint_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "clusters_code_fkey"
            columns: ["code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "clusters_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
        ]
      }
      way_galaxies: {
        Row: {
          code: string
          created_at: string | null
          id: number
          shape: Database["public"]["Enums"]["GalaxyShape"]
          updated_at: string | null
          waypoint_id: number
        }
        Insert: {
          code: string
          created_at?: string | null
          id?: number
          shape: Database["public"]["Enums"]["GalaxyShape"]
          updated_at?: string | null
          waypoint_id: number
        }
        Update: {
          code?: string
          created_at?: string | null
          id?: number
          shape?: Database["public"]["Enums"]["GalaxyShape"]
          updated_at?: string | null
          waypoint_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "galaxies_code_fkey"
            columns: ["code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "galaxies_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
        ]
      }
      way_nebulae: {
        Row: {
          code: string
          created_at: string
          id: number
          type: Database["public"]["Enums"]["NebulaType"]
          updated_at: string | null
          waypoint_id: number | null
        }
        Insert: {
          code: string
          created_at?: string
          id?: number
          type: Database["public"]["Enums"]["NebulaType"]
          updated_at?: string | null
          waypoint_id?: number | null
        }
        Update: {
          code?: string
          created_at?: string
          id?: number
          type?: Database["public"]["Enums"]["NebulaType"]
          updated_at?: string | null
          waypoint_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nebulas_code_fkey"
            columns: ["code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "nebulas_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
        ]
      }
      way_planets: {
        Row: {
          code: string
          composition: Database["public"]["Enums"]["SurfaceComposition"]
          created_at: string
          id: number
          size: Database["public"]["Enums"]["PlanetSize"]
          updated_at: string | null
          waypoint_id: number | null
        }
        Insert: {
          code: string
          composition: Database["public"]["Enums"]["SurfaceComposition"]
          created_at?: string
          id?: number
          size: Database["public"]["Enums"]["PlanetSize"]
          updated_at?: string | null
          waypoint_id?: number | null
        }
        Update: {
          code?: string
          composition?: Database["public"]["Enums"]["SurfaceComposition"]
          created_at?: string
          id?: number
          size?: Database["public"]["Enums"]["PlanetSize"]
          updated_at?: string | null
          waypoint_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "planets_code_fkey"
            columns: ["code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "planets_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
        ]
      }
      way_satellites: {
        Row: {
          code: string
          composition: Database["public"]["Enums"]["SurfaceComposition"]
          created_at: string
          id: number
          updated_at: string | null
          waypoint_id: number
        }
        Insert: {
          code: string
          composition: Database["public"]["Enums"]["SurfaceComposition"]
          created_at?: string
          id?: number
          updated_at?: string | null
          waypoint_id: number
        }
        Update: {
          code?: string
          composition?: Database["public"]["Enums"]["SurfaceComposition"]
          created_at?: string
          id?: number
          updated_at?: string | null
          waypoint_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "satellites_code_fkey"
            columns: ["code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "satellites_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
        ]
      }
      way_stars: {
        Row: {
          class: Database["public"]["Enums"]["StarClass"]
          code: string
          created_at: string
          id: number
          updated_at: string | null
          waypoint_id: number | null
        }
        Insert: {
          class: Database["public"]["Enums"]["StarClass"]
          code: string
          created_at?: string
          id?: number
          updated_at?: string | null
          waypoint_id?: number | null
        }
        Update: {
          class?: Database["public"]["Enums"]["StarClass"]
          code?: string
          created_at?: string
          id?: number
          updated_at?: string | null
          waypoint_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "way_stars_code_fkey"
            columns: ["code"]
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
          code: string
          created_at: string | null
          id: number
          morphology: Database["public"]["Enums"]["SuperclusterMorphology"]
          updated_at: string | null
          waypoint_id: number
        }
        Insert: {
          code: string
          created_at?: string | null
          id?: number
          morphology: Database["public"]["Enums"]["SuperclusterMorphology"]
          updated_at?: string | null
          waypoint_id: number
        }
        Update: {
          code?: string
          created_at?: string | null
          id?: number
          morphology?: Database["public"]["Enums"]["SuperclusterMorphology"]
          updated_at?: string | null
          waypoint_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "superclusters_code_fkey"
            columns: ["code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "superclusters_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
        ]
      }
      way_systems: {
        Row: {
          code: string
          created_at: string | null
          id: number
          isEnabled: boolean | null
          isInhabited: boolean
          type: Database["public"]["Enums"]["SystemType"]
          updated_at: string | null
          waypoint_id: number | null
        }
        Insert: {
          code: string
          created_at?: string | null
          id?: number
          isEnabled?: boolean | null
          isInhabited?: boolean
          type: Database["public"]["Enums"]["SystemType"]
          updated_at?: string | null
          waypoint_id?: number | null
        }
        Update: {
          code?: string
          created_at?: string | null
          id?: number
          isEnabled?: boolean | null
          isInhabited?: boolean
          type?: Database["public"]["Enums"]["SystemType"]
          updated_at?: string | null
          waypoint_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "systems_code_fkey"
            columns: ["code"]
            isOneToOne: true
            referencedRelation: "waypoints"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "systems_waypoint_id_fkey"
            columns: ["waypoint_id"]
            isOneToOne: false
            referencedRelation: "waypoints"
            referencedColumns: ["id"]
          },
        ]
      }
      waypoints: {
        Row: {
          category: Database["public"]["Enums"]["WaypointCategory"]
          code: string
          created_at: string | null
          id: number
          is_destination: boolean
          name: string
          parent_id: number | null
          source_id: number | null
          updated_at: string | null
        }
        Insert: {
          category: Database["public"]["Enums"]["WaypointCategory"]
          code: string
          created_at?: string | null
          id?: number
          is_destination?: boolean
          name: string
          parent_id?: number | null
          source_id?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: Database["public"]["Enums"]["WaypointCategory"]
          code?: string
          created_at?: string | null
          id?: number
          is_destination?: boolean
          name?: string
          parent_id?: number | null
          source_id?: number | null
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
          {
            foreignKeyName: "waypoints_EXP_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "waypoints_data_source"
            referencedColumns: ["id"]
          },
        ]
      }
      waypoints_data_source: {
        Row: {
          id: number
          table_name: Database["public"]["Enums"]["WaypointTableName"]
        }
        Insert: {
          id?: number
          table_name: Database["public"]["Enums"]["WaypointTableName"]
        }
        Update: {
          id?: number
          table_name?: Database["public"]["Enums"]["WaypointTableName"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      GalaxyShape:
        | "Spiral"
        | "Elliptical"
        | "Lenticular"
        | "Peculiar"
        | "Irregular"
      NebulaType:
        | "Emission"
        | "Reflection"
        | "Dark"
        | "Planetary"
        | "Supernova Remnant"
      PlanetSize: "Supergiant" | "Giant" | "Super" | "Standard" | "Dwarf"
      StarClass: "O" | "B" | "A" | "F" | "G" | "K" | "M"
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
        | "Comet"
        | "Asteroid"
        | "Space Station"
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
