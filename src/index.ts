import dotenvFlow from "dotenv-flow"
dotenvFlow.config()

import express from "express"
import cors from "cors"
import Stripe from "stripe"

// Middleware
import { contentTypeValidator } from "@middleware/contentTypeValidator.js"

const {
  PORT = 9000,
  STRIPE_PUBLIC_KEY = "",
  STRIPE_SECRET_KEY = "",
} = process.env

const app = express()
const stripe = new Stripe(STRIPE_SECRET_KEY)

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
