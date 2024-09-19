import request from "supertest"
import { beforeEach, describe, it, expect, vi } from "vitest"

// Helpers
import app from "@mocks/app.mocks.js"

beforeEach(() => {
  vi.resetAllMocks()
})

describe("GET /payment/:id", () => {
  describe("given the ENV var is set up correctly", () => {
    it("should respond with the Stripe PK", async () => {
      const res = await request(app).get("/payment").send()

      // Verify base response
      expect(res.status).toBe(200)
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      )

      // Verify data integrity
      expect(res.body).toHaveProperty("ok", true)

      expect(res.body.data.publishable_key).toBeDefined()
    })
  })
})
