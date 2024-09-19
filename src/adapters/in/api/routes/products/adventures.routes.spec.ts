import request from "supertest"
import { beforeEach, describe, it, expect, vi } from "vitest"

// Helpers
import app from "@mocks/app.mocks.js"

beforeEach(() => {
  vi.resetAllMocks()
})

describe("GET /products/adventures/:id", () => {
  describe("given a valid id", () => {
    it("should respond with the requested Adventure entity", async () => {
      const mockReq = {
        id: 1,
      }

      const res = await request(app)
        .get(`/products/adventures/${mockReq.id}`)
        .send()

      // Verify base response
      expect(res.status).toBe(200)
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      )

      // Verify data integrity
      expect(res.body).toHaveProperty("ok", true)

      expect(res.body.data.adventure.id).toBe(mockReq.id)
      expect(res.body.data.adventure.price_sb).toBeDefined()
      expect(res.body.data.adventure.waypoint.id).toBeDefined()
    })
  })

  describe("when the ID is invalid", () => {
    const mockReq = {
      id: [undefined, null, NaN, "abc"],
    }

    it.each(mockReq.id)("should respond with null", async (id) => {
      const res = await request(app).get(`/products/adventures/${id}`).send()

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
