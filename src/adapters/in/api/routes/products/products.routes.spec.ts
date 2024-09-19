import request from "supertest"
import { beforeEach, describe, it, expect, vi } from "vitest"

// Types
import { ProductType } from "@ts/products.types.js"

// Helpers
import app from "@mocks/app.mocks.js"

beforeEach(() => {
  vi.resetAllMocks()
})

describe("GET /products", () => {
  describe("given a valid product type and ID", () => {
    it("should respond with the requested Product entity", async () => {
      const mockReq = {
        type: ProductType.adventure,
        id: 1,
      }

      const res = await request(app)
        .get(`/products?type=${mockReq.type}&id=${mockReq.id}`)
        .send()

      // Verify base response
      expect(res.status).toBe(200)
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      )

      // Verify data integrity
      expect(res.body).toHaveProperty("ok", true)

      expect(res.body.data.product.id).toBe(mockReq.id)
      expect(res.body.data.product.price_sb).toBeDefined()
      expect(res.body.data.product.waypoint.id).toBeDefined()
    })
  })

  describe("when the type is invalid", () => {
    const mockReq = {
      type: [ProductType.merchandise, ProductType.tour],
      id: 1,
    }

    it.each(mockReq.type)("should respond with 404 not found", async (type) => {
      const res = await request(app)
        .get(`/products?type=${type}&id=${mockReq.id}`)
        .send()

      // Verify base response
      expect(res.status).toBe(404)
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      )

      // Verify data integrity
      expect(res.body.data).not.toBeDefined()
    })
  })

  describe("when the ID is invalid", () => {
    const mockReq = {
      type: ProductType.adventure,
      id: [undefined, null, NaN, "abc"],
    }

    it.each(mockReq.id)("should respond with 400 bad request", async (id) => {
      const res = await request(app)
        .get(`/products?type=${mockReq.type}&id=${id}`)
        .send()

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
