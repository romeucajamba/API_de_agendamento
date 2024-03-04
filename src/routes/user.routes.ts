import { FastifyInstance } from "fastify";
import { UserUseCase } from "../useCases/use.cases";
import { request } from "http";
import { UserCreate } from "../interface/user.interface";


export function userRoutes(fastify: FastifyInstance){
    const userUseCase = new UserUseCase() 

    fastify.post<{Body: UserCreate}>('/', (request, reply) => {

        const {name, email } = request.body;

        try{
            const data = userUseCase.create({
                name,
                email,
            })
            return reply.send(data)
            
        }catch (error){
            reply.send(error)

        }
    })
}