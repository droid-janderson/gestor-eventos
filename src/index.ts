import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.get(`/user/:id`, async (req, res) => {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  })
  res.json(user)
})

app.post(`/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      ...req.body
    },
  })
  res.json(result)
})

app.put('/user/:id', async (req, res) => {
  const { id } = req.params
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: {
    ...req.body
    }
  })
  res.json(user)
})

app.delete(`/user/:id`, async (req, res) => {
  const { id } = req.params
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  })
  res.json(user)
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)