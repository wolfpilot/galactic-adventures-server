/**
 * Provide dotenv module separately so that it gets hoisted as the first import
 *
 * @see https://stackoverflow.com/a/74905715
 */
import "./env.js"

import express from "express"
import cors from "cors"
import Stripe from "stripe"

// Middleware
import { contentTypeValidator } from "@middleware/contentTypeValidator.js"
import { errorValidator } from "@middleware/errorValidator.js"
import { errorHandler } from "@middleware/errorHandler.js"
import { debugLogger, requestLogger, errorLogger } from "@middleware/logger.js"

// Routes
import paymentRoutes from "@routes/payment.routes.js"

const { PORT = 9000 } = process.env

const app = express()

// Logging middlware
app.use(requestLogger)
app.use(debugLogger)

app.use(cors())

// Request validator
app.put("/*", contentTypeValidator("application/json"))
app.post("/*", contentTypeValidator("application/json"))
app.patch("/*", contentTypeValidator("application/json"))

// Body parser
app.use(express.json())

// Routes
app.get("/config", (_req, res) => {
  res.send({
    publishableKey: STRIPE_PUBLIC_KEY,
  })
})

app.post("/payment", async (_req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "eur",
      amount: 100,
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return res.send({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: {
          message: err.message,
        },
      })
    }

    return res.status(500).send()
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

// Error middleware
app.use(errorValidator)
app.use(errorHandler)
app.use(errorLogger)
