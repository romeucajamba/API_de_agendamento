import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";
import { contactRoutes } from './routes/contact.routes';


const api: FastifyInstance = fastify({logger: true})

api.register(userRoutes, {
    prefix: '/users',
});
api.register(contactRoutes, {
    prefix: '/contacts'
})

async function turnOn() {
    try {
        await api.listen({
        port: 3000
    })
} catch (error) {
    console.error(error)
    process.exit(1)    
}
}

turnOn()