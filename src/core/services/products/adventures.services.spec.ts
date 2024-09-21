import { beforeEach, describe, it, expect, vi } from "vitest"

// Services
import { AdventuresServiceImpl } from "./adventures.services.js"

const mockAdventuresRepository = {
  findWithWaypointById: vi.fn(),
}
const mockWaypointsRepository = {
  findTopParentId: vi.fn(),
  findDetailsByIdAndCat: vi.fn(),
  findWithChildrenById: vi.fn(),
}
const adventuresService = new AdventuresServiceImpl(
  mockAdventuresRepository,
  mockWaypointsRepository
)

beforeEach(() => {
  vi.resetAllMocks()
})

describe("AdventuresService", () => {
  describe("getWithWaypointById", () => {
    describe("given there are an Adventure and related Waypoint", () => {
      it("should fetch the cumulated data", async () => {
        const mockRes1 = {
          id: 1,
          description: "Oh, our own beautiful Luna!",
          price_sb: 100,
          waypoint: {
            id: 14,
            code: "moon",
            name: "Moon",
            category: "Satellite",
            parent_id: 8,
          },
        }
        const mockRes2 = {
          size: "Large",
          composition: "Rocky",
          geological_activity: null,
          diameter_km: 3475,
          surface_temp_avg_k: 400,
          day_length_h: 708.7,
          orbital_period_d: 27.3,
          gravity_n: 1.6,
          wind_speed_avg_kmh: 0,
          wind_gust_max_kmh: 0,
          precipitation_level: "None",
          precipitation_types: null,
          weather_alerts: null,
          atmosphere: null,
        }

        mockAdventuresRepository.findWithWaypointById.mockResolvedValue(
          mockRes1
        )
        mockWaypointsRepository.findDetailsByIdAndCat.mockResolvedValue(
          mockRes2
        )

        const res = await adventuresService.getWithWaypointById(1)

        expect(res).toEqual({
          id: 1,
          description: "Oh, our own beautiful Luna!",
          price_sb: 100,
          waypoint: {
            id: 14,
            code: "moon",
            name: "Moon",
            category: "Satellite",
            parent_id: 8,
            details: {
              size: "Large",
              composition: "Rocky",
              geological_activity: null,
              diameter_km: 3475,
              surface_temp_avg_k: 400,
              day_length_h: 708.7,
              orbital_period_d: 27.3,
              gravity_n: 1.6,
              wind_speed_avg_kmh: 0,
              wind_gust_max_kmh: 0,
              precipitation_level: "None",
              precipitation_types: null,
              weather_alerts: null,
              atmosphere: null,
            },
          },
        })
        expect(mockAdventuresRepository.findWithWaypointById).toHaveBeenCalled()
        expect(mockWaypointsRepository.findDetailsByIdAndCat).toHaveBeenCalled()
      })
    })

    describe("when there are no Waypoint details", () => {
      it("should fetch the base Adventure", async () => {
        const mockRes1 = {
          id: 1,
          description: "Oh, our own beautiful Luna!",
          price_sb: 100,
          waypoint: {
            id: 14,
            code: "moon",
            name: "Moon",
            category: "Satellite",
            parent_id: 8,
          },
        }
        const mockRes2 = null

        mockAdventuresRepository.findWithWaypointById.mockResolvedValue(
          mockRes1
        )
        mockWaypointsRepository.findDetailsByIdAndCat.mockResolvedValue(
          mockRes2
        )

        const res = await adventuresService.getWithWaypointById(1)

        expect(res).toEqual({
          id: 1,
          description: "Oh, our own beautiful Luna!",
          price_sb: 100,
          waypoint: {
            id: 14,
            code: "moon",
            name: "Moon",
            category: "Satellite",
            parent_id: 8,
            details: null,
          },
        })
        expect(mockAdventuresRepository.findWithWaypointById).toHaveBeenCalled()
        expect(mockWaypointsRepository.findDetailsByIdAndCat).toHaveBeenCalled()
      })
    })

    describe("when there is no Waypoint", () => {
      it("should fetch the base Adventure", async () => {
        const mockRes1 = {
          id: 1,
          description: "Oh, our own beautiful Luna!",
          price_sb: 100,
          waypoint: null,
        }

        mockAdventuresRepository.findWithWaypointById.mockResolvedValue(
          mockRes1
        )

        const res = await adventuresService.getWithWaypointById(1)

        expect(res).toEqual(null)
        expect(mockAdventuresRepository.findWithWaypointById).toHaveBeenCalled()
        expect(
          mockWaypointsRepository.findDetailsByIdAndCat
        ).not.toHaveBeenCalled()
      })
    })

    describe("when there is no Adventure", () => {
      it("should return null", async () => {
        const mockRes1 = null

        mockAdventuresRepository.findWithWaypointById.mockResolvedValue(
          mockRes1
        )

        const res = await adventuresService.getWithWaypointById(1)

        expect(res).toEqual(null)
        expect(mockAdventuresRepository.findWithWaypointById).toHaveBeenCalled()
        expect(
          mockWaypointsRepository.findDetailsByIdAndCat
        ).not.toHaveBeenCalled()
      })
    })
  })
})
