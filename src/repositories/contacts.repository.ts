import { prisma } from "../database/prisma-client";
import { Contacts, ContactRepository, ContactCreateData } from "../interface/contacts.interface";

 export class ContactsRepositoryPrisma implements ContactRepository{

   async create(data: ContactCreateData ): Promise<Contacts> {
        const result = await prisma.contacts.create({
            data:{
                email: data.email,
                name: data.name,
                phone: data.phone,
                userId: data.userId,
            }
        });
        return result
    }

   async findEmailOrPhone(email: string, phone: string): Promise<Contacts | null> {
        const result = await prisma.contacts.findFirst({
            where: {
                OR: [
                    {
                        email,
                    },
                    {
                        phone
                    }
                ],
            },
        });
        return result || null
    }
    async findAllContacts(userId: string): Promise<Contacts[]> {
        const result = await prisma.contacts.findMany({
            where:{
                userId,
            }
        });
        return result
    };
    async updateContact({ id, name, email, phone }: Contacts): Promise<Contacts> {
        const result = await prisma.contacts.update({
            where:{
                id
            },
            data:{
                name, 
                email, 
                phone
            }
        });
        return result
    }
}