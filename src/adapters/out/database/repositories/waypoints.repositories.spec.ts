import { describe, it, expect } from "vitest"

// Repositories
import { WaypointsRepository } from "./waypoints.repositories.js"

describe("WaypointsRepository", () => {
  const waypointsRepository = new WaypointsRepository()

  describe("findTopParentId", () => {
    it("should return the highest parent ID of the given Waypoint ID", async () => {
      const res = await waypointsRepository.findTopParentId()

      expect(res).toEqual({
        id: 1,
      })
    })
  })

  describe("findDetailsByIdAndCat", () => {
    describe("given a valid ID", () => {
      it("should return the WaypointDetails entity as specified by ID and category", async () => {
        const res = await waypointsRepository.findDetailsByIdAndCat(
          1,
          "Supercluster"
        )

        expect(res).toEqual({
          morphology: "Filament",
        })
      })
    })

    describe("when the ID does not exist", () => {
      it("should return null", async () => {
        const res = await waypointsRepository.findDetailsByIdAndCat(
          0,
          "Supercluster"
        )

        expect(res).toEqual(null)
      })
    })
  })

  describe("findWithChildrenById", () => {
    describe("given a valid ID", () => {
      it("should return the Waypoint entity as specified by ID", async () => {
        const res = await waypointsRepository.findWithChildrenById(1)

        expect(res).toEqual({
          id: 1,
          parent_id: null,
          code: "laniakea",
          name: "Laniakea",
          category: "Supercluster",
          adventure: null,
          details: {
            morphology: "Filament",
          },
          children: [
            {
              adventure: null,
              category: "Cluster",
              code: "virgo",
              id: 2,
              name: "Virgo",
            },
          ],
        })
      })
    })

    describe("when the ID does not exist", () => {
      it("should return null", async () => {
        const res = await waypointsRepository.findWithChildrenById(0)

        expect(res).toEqual(null)
      })
    })
  })
})
