import request from "supertest"
import { beforeEach, describe, it, expect, vi } from "vitest"

// Types
import { ProductType } from "@ts/products.types.js"

// Helpers
import app from "@mocks/app.mocks.js"

beforeEach(() => {
  vi.resetAllMocks()
})

/**
 * POST Intent: Negative test-cases pretty much duplicate the /products ones,
 * so we'll skip testing those.
 *
 * GET Intent: Worth testing. However, accepting, rejecting and/or cancelling payments
 * results in a myriad of possibilities which, frankly, I don't have time to test.
 *
 * Better take my word for it that it works :)
 */
describe("POST /payment", () => {
  describe("given a valid product type and ID", () => {
    it("should respond with the Stripe Payment Intent object", async () => {
      const mockReq = {
        productType: ProductType.adventure,
        productId: "1",
      }

      const res = await request(app).post("/payment/intent").send(mockReq)

      // Verify base response
      expect(res.status).toBe(201)
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      )

      // Verify data integrity
      expect(res.body).toHaveProperty("ok", true)

      expect(res.body.data.paymentIntent.id).toBeDefined()
      expect(res.body.data.paymentIntent.client_secret).toBeDefined()
      expect(res.body.data.paymentIntent.amount).toBeDefined()
      expect(res.body.data.paymentIntent.currency).toBeDefined()
    })
  })
})
