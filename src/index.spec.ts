import request from "supertest"
import { describe, it, expect } from "vitest"

// Helpers
import { app } from "@helpers/testing.helpers.js"

describe("index", () => {
  describe("ping", () => {
    it("should return true if server is reachable", async () => {
      const res = await request(app).get("/ping").send()

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty("ok", true)
    })
  })
})
