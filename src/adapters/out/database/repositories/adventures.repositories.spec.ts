import { describe, it, expect } from "vitest"

// Repositories
import { AdventuresRepository } from "./adventures.repositories.js"

describe("AdventuresRepository", () => {
  const adventuresRepository = new AdventuresRepository()

  describe("findWithWaypointById", () => {
    describe("given a valid ID", () => {
      it("should return the Adventure entity as specified by ID", async () => {
        const res = await adventuresRepository.findWithWaypointById(1)

        expect(res).toEqual({
          id: 1,
          description: "Oh, our own beautiful Luna!",
          price_sb: 100,
          waypoint: {
            id: 14,
            parent_id: 8,
            code: "moon",
            name: "Moon",
            category: "Satellite",
          },
        })
      })

      describe("when the ID does not exist", () => {
        it("should return null", async () => {
          const res = await adventuresRepository.findWithWaypointById(0)

          expect(res).toEqual(null)
        })
      })
    })
  })
})
