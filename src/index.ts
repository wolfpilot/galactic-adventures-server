/**
 * Provide dotenv module separately so that it gets hoisted as the first import
 *
 * @see https://stackoverflow.com/a/74905715
 */
import "./env.js"

import express from "express"
import cors from "cors"

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.use(cors())

// Request validator
app.put("/*", contentTypeValidator("application/json"))
app.post("/*", contentTypeValidator("application/json"))
app.patch("/*", contentTypeValidator("application/json"))

// Body parser
app.use(express.json())

// Routes
app.use("/payment", paymentRoutes)

// Error middleware
app.use(errorValidator)
app.use(errorHandler)
app.use(errorLogger)
