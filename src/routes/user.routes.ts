import { FastifyInstance } from "fastify";
import { UserUseCase } from "../useCases/use.cases";
import { UserCreate } from "../interface/user.interface";


export async function userRoutes(fastify: FastifyInstance){

    const userUseCase = new UserUseCase() ;

    fastify.post<{Body: UserCreate}>('/',  async (request, reply) => {

        const {name, email } = request.body;

        try{
            const data = await userUseCase.create({
                name,
                email,
            })
            return reply.send(data)

        }catch (error){
            reply.send(error)

        }
    });

    fastify.get('/', (request, reply)=>{
        reply.send( {Usuaŕio:'Navegue entre as rotas'})
    });
}