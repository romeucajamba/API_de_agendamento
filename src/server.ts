import { error } from "console";
import fastify, { FastifyInstance } from "fastify";

const api: FastifyInstance = fastify({logger: true})

async function runServer() {
 await api.listen({
    port: 3000
},
    (error) => {
        console.error(error);
        process.exit(1)
})    
}

runServer()