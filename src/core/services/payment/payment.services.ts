// Types
import type { PaymentService } from "./types.js"

// Helpers
import { ServiceError } from "@helpers/errorHelper.js"

// Setup
const { STRIPE_PUBLIC_KEY = "" } = process.env

export class PaymentServiceImpl implements PaymentService {
  getConfig() {
    return STRIPE_PUBLIC_KEY
      ? Promise.resolve(STRIPE_PUBLIC_KEY)
      : Promise.reject(new ServiceError("Unhandled"))
  }
}
