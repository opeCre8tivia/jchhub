import express, { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()

app.get("/health", (req: Request, res: Response) => {
  const { ip, header, path } = req
  res.status(400).json({
    health: "100%",
    ip,
    header,
    path
  })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
