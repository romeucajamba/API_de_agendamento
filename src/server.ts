import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";


const api: FastifyInstance = fastify({logger: true})

api.register(userRoutes, {
    prefix: '/user',
});

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