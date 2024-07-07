import express, { Request, Response } from "express"
import cors from "cors"
import { PrismaClient } from "@prisma/client"
import AuthRouter from "./routes/auth.routes"

const app = express()
export const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/health", (req: Request, res: Response) => {
  const { ip, header, path } = req
  res.status(400).json({
    health: "100%",
    ip,
    header,
    path
  })
})

app.use("/api", AuthRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
