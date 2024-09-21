import express from "express"

// Middleware
import { contentTypeValidator } from "@api/middleware/contentTypeValidator.js"

// API
import router from "@api/routes/index.routes.js"

// Create a minimal server repro for testing purposes
export const app = express()

app.put("/*", contentTypeValidator("application/json"))
app.post("/*", contentTypeValidator("application/json"))
app.patch("/*", contentTypeValidator("application/json"))

app.use(express.json())

app.use("/", router)
