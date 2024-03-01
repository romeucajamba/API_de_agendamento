import fastify, { FastifyInstance } from "fastify";

const api: FastifyInstance = fastify({logger: true})

async function runServer() {
 await api.listen({
    port: 3000
})    
}

runServer()