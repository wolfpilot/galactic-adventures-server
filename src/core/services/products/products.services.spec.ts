import { beforeEach, describe, it, expect, vi } from "vitest"

// Types
import { ProductType } from "@ts/products.types.js"

// Services
import { ProductsServiceImpl } from "./products.services.js"

const mockAdventuresRepository = {
  findWithWaypointById: vi.fn(),
}
const productsService = new ProductsServiceImpl(mockAdventuresRepository)

beforeEach(() => {
  vi.resetAllMocks()
})

describe("ProductsService", () => {
  describe("getByTypeAndId", () => {
    describe("given a valid Adventure and ID", () => {
      it("should fetch the relevant product", async () => {
        const mockRes = {
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
        }
        mockAdventuresRepository.findWithWaypointById.mockResolvedValue(mockRes)

        const res = await productsService.getByTypeAndId({
          type: ProductType.adventure,
          id: 1,
        })

        expect(res).toEqual(mockRes)
        expect(mockAdventuresRepository.findWithWaypointById).toHaveBeenCalled()
      })
    })

    describe("when the Product type is invalid", () => {
      it("should return null", async () => {
        const mockRes = null

        mockAdventuresRepository.findWithWaypointById.mockResolvedValue(mockRes)

        const res = await productsService.getByTypeAndId({
          type: ProductType.merchandise,
          id: 1,
        })

        expect(res).toEqual(mockRes)
        expect(
          mockAdventuresRepository.findWithWaypointById
        ).not.toHaveBeenCalled()
      })
    })
  })
})
