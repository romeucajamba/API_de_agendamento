import { prisma } from "../database/prisma-client";
import { User, UserCreate, UserRepository } from "../interface/user.interface";

class UserRepositoryPrisma  implements UserRepository{
    async create(data: UserCreate): Promise<User> {
        const resultData = await prisma.user.create({
            data:{
                name: data.name,
                email: data.email
            }
        });
        return resultData;
    }
    async fidByEmail(email: string): Promise<User | null> {
        const resultData = await prisma.user.findUnique({
            where:{
                email
            },
        })
        return resultData || null
    }
}


export { UserRepositoryPrisma };