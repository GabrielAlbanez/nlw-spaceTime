import fastify from 'fastify'

import { PrismaClient } from '@prisma/client'
const app = fastify()

const prisma = new PrismaClient()

// esse passo a passo e para se criar uma api com fastify

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('👍 HTTP SERVER running on https://localhost:3333')
  })

// esse app.liste fucntion que vai fazer a criação da nossa urla de nossa api
// ou server para o front end acesar e caso esiver funciondo essa api vai
// retornar uma resposta

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})
// quando alguem acessar essa rota na nossua url quero que retorne helo word
// http metodo : GET = pegar inf de acordo com uma url (LISTAR ALGO)
// htpp metodo : POST = ciar algo
// htpp metodo : PUT = Atualizar algo
// htpp metodo : PACHT = ATUALIZAR UMA INF ESPECIFICA
// htpp metodo : DELETE = Deletar algo
