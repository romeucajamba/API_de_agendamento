import { User, UserCreate, UserRepository } from "../interface/user.interface";

class UserRepositoryPrisma  implements UserRepository{
    async create(data: UserCreate): Promise<User> {
        
    }
}


export { UserRepositoryPrisma };