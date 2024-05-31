import express from "express"

const { PORT = 9000 } = process.env

const app = express()

app.get("/", (_req, res) => {
  res.send("\\[T]/ Praise the sun!")
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
