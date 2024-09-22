import express from "express"
import cors from "cors"

// Middleware
import { contentTypeValidator } from "@api/middleware/contentTypeValidator.js"
import { errorValidator } from "@api/middleware/errorValidator.js"
import { errorHandler } from "@api/middleware/errorHandler.js"

// Routes
import routes from "@api/routes/index.routes.js"

const app = express()

app.use(cors())

// Request validator
app.put("/*", contentTypeValidator("application/json"))
app.post("/*", contentTypeValidator("application/json"))
app.patch("/*", contentTypeValidator("application/json"))

// Body parser
app.use(express.json())

app.use("/", routes)

// Error middleware
app.use(errorValidator)
app.use(errorHandler)

export default app
