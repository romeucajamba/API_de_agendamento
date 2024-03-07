import { FastifyInstance } from "fastify";
import { ContactsCases } from "../useCases/contactCase";
import { ContactCreate } from '../interface/contacts.interface'
import { authMiddleware } from "../middleware/auth.middleware";


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
        
       } catch (error) {
            reply.send(error)
       }
    });
}