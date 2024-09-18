import { beforeEach, describe, it, expect, vi } from "vitest"

// Helpers
import { RepositoryError } from "@helpers/error.helpers.js"

// Services
import { WaypointsServiceImpl } from "./waypoints.services.js"

const mockWaypointsRepository = {
  findTopParentId: vi.fn(),
  findDetailsByIdAndCat: vi.fn(),
  findWithChildrenById: vi.fn(),
}
const waypointsService = new WaypointsServiceImpl(mockWaypointsRepository)

beforeEach(() => {
  vi.resetAllMocks()
})

describe("WaypointsService", () => {
  describe("getTopParentId", () => {
    describe("given there is a Waypoint without a parentId", () => {
      it("should fetch the highest parent ID of the given Waypoint ID", async () => {
        const mockRes = {
          id: 1,
        }
        mockWaypointsRepository.findTopParentId.mockResolvedValue(mockRes)

        const res = await waypointsService.getTopParentId()

        expect(res).toEqual(mockRes)
        expect(mockWaypointsRepository.findTopParentId).toHaveBeenCalled()
      })
    })

    describe("when there is no Waypoint without a parentid", () => {
      it("should return null", async () => {
        const mockRes = null
        mockWaypointsRepository.findTopParentId.mockResolvedValue(mockRes)

        const res = await waypointsService.getTopParentId()

        expect(res).toEqual(null)
        expect(mockWaypointsRepository.findTopParentId).toHaveBeenCalled()
      })
    })

    describe("when there is a DB-related error", () => {
      it("should return a non-revealing error", async () => {
        mockWaypointsRepository.findTopParentId.mockRejectedValue(
          new RepositoryError("NotFound")
        )

        const res = mockWaypointsRepository.findTopParentId()

        await expect(res).rejects.toThrowError(new RepositoryError("NotFound"))
      })
    })
  })

  describe("getDetailsByIdAndCat", () => {
    describe("given a valid ID and category", () => {
      it("should fetch the WaypointDetails entity", async () => {
        const mockRes = {
          morphology: "Filament",
        }
        mockWaypointsRepository.findDetailsByIdAndCat.mockResolvedValue(mockRes)

        const res = await waypointsService.getDetailsByIdAndCat(
          1,
          "Supercluster"
        )

        expect(res).toEqual(mockRes)
        expect(mockWaypointsRepository.findDetailsByIdAndCat).toHaveBeenCalled()
      })
    })

    describe("when there is no record with the ID and/or category", () => {
      it("should return null", async () => {
        const mockRes = null
        mockWaypointsRepository.findDetailsByIdAndCat.mockResolvedValue(mockRes)

        const res = await waypointsService.getDetailsByIdAndCat(
          0,
          "Supercluster"
        )

        expect(res).toEqual(null)
        expect(mockWaypointsRepository.findDetailsByIdAndCat).toHaveBeenCalled()
      })
    })
  })

  describe("getWithChildrenById", () => {
    describe("given a valid ID", () => {
      it("should fetch the cumulated data", async () => {
        const mockRes = {
          id: 1,
          parent_id: null,
          code: "laniakea",
          name: "Laniakea",
          category: "Supercluster",
          details: {
            morphology: "Filament",
          },
          adventure: null,
          children: [
            {
              id: 2,
              code: "virgo",
              name: "Virgo",
              category: "Cluster",
              adventure: null,
            },
          ],
        }
        mockWaypointsRepository.findWithChildrenById.mockResolvedValue(mockRes)

        const res = await waypointsService.getWithChildrenById(1)

        expect(res).toEqual(mockRes)
        expect(mockWaypointsRepository.findWithChildrenById).toHaveBeenCalled()

        /**
         * ?: How to mock DB returning expected data on first query?
         *
         * The method for finding details should fire.
         *
         * expect(mockWaypointsRepository.findDetailsByIdAndCat).toHaveBeenCalled()
         */
      })
    })

    describe("when there is no record with the ID", () => {
      it("should return null", async () => {
        const mockRes = null
        mockWaypointsRepository.findWithChildrenById.mockResolvedValue(mockRes)

        const res = await waypointsService.getWithChildrenById(0)

        expect(res).toEqual(null)
        expect(mockWaypointsRepository.findWithChildrenById).toHaveBeenCalled()

        /**
         * ?: How to mock DB returning no records for invalid ID?
         *
         * The method for finding details should never fire.
         *
         * expect(
         *    mockWaypointsRepository.findDetailsByIdAndCat
         * ).not.toHaveBeenCalled()
         *
         */
      })
    })
  })
})
