import { FastifyInstance } from "fastify";
import { ContactsCases } from "../useCases/contactCase";
import { ContactCreate, Contacts } from '../interface/contacts.interface'
import { authMiddleware } from "../middleware/auth.middleware";
import { prisma } from "../database/prisma-client";


export async function contactRoutes(fastify: FastifyInstance){

    const contactCase = new ContactsCases() ;
    fastify.addHook('preHandler', authMiddleware)
    fastify.post<{Body: ContactCreate}>('/',  async (request, reply) => {

        const {name, email, phone } = request.body;
        const emailUser = request.headers['email']

        try{
            const data = await contactCase.create({
                email,
                name,
                phone,
                userEmail: emailUser,
            });
            return reply.send(data)

        }catch (error){
            reply.send(error)

        }
    });

    fastify.get('/', async (request, reply)=>{
        const emailSearch = request.headers['email']

       try {
            const data = await contactCase.listAllContact(userEmail)
            return reply.send(data)
       } catch (error) {
            reply.send(error)
       }
    });
    fastify.put<{Body: Contacts; Params: {id: string}}>('/:id', async (request, reply) => {
        const { id } = request.params;
        const { name, email, phone} = request.body;

        try {
            const data = await contactCase.updateContact({id, name, email, phone});
             return reply.send(data)
        } catch (error) {
            return reply.send(error)
        }
    });
    fastify.delete<{Params: {id: string}}>('/:id', async (request, reply) => {
        const { id } = request.params;

        try {
            const result = await prisma.contacts.delete({
            
                    id
            });
            return reply.send(result)
        } catch (error) {
            return reply.send(error)
        }
    })
}