import { UserCreate, UserRepository } from "../interface/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.respository";

class UseCase {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepositoryPrisma()
    }

    async create({name, email}: UserCreate): Promise<User>{

    }
}