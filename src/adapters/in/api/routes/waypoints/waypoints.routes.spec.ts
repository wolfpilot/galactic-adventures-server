import request from "supertest"
import { beforeEach, describe, it, expect, vi } from "vitest"

// Helpers
import app from "@mocks/app.mocks.js"

beforeEach(() => {
  vi.resetAllMocks()
})

describe("GET /waypoints/:id", () => {
  describe("given a valid id", () => {
    it("should respond with the requested Waypoint entity", async () => {
      const mockReq = {
        id: 1,
      }

      const res = await request(app).get(`/waypoints/${mockReq.id}`).send()

      // Verify base response
      expect(res.status).toBe(200)
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      )

      // Verify data integrity
      expect(res.body).toHaveProperty("ok", true)

      expect(res.body.data.waypoint.id).toBe(mockReq.id)
      expect(res.body.data.waypoint.code).toBeDefined()
      expect(res.body.data.waypoint.category).toBeDefined()
    })
  })

  describe("when the ID is null", () => {
    it("should respond with the top-most parent Waypoint entity", async () => {
      const mockReq = {
        id: null,
      }

      const res = await request(app).get(`/waypoints/${mockReq.id}`).send()

      // Verify base response
      expect(res.status).toBe(200)
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      )

      // Verify data integrity
      expect(res.body).toHaveProperty("ok", true)

      expect(res.body.data.waypoint.id).toBeDefined()
      expect(res.body.data.waypoint.code).toBeDefined()
      expect(res.body.data.waypoint.category).toBeDefined()
    })
  })

  describe("when the ID is invalid", () => {
    const mockReq = {
      id: [undefined, NaN, "abc"],
    }

    it.each(mockReq.id)("should respond with null", async (id) => {
      const res = await request(app).get(`/waypoints/${id}`).send()

      // Verify base response
      expect(res.status).toBe(400)
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      )

      // Verify data integrity
      expect(res.body.data).not.toBeDefined()
    })
  })
})
