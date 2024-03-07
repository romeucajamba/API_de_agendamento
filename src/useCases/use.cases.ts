import { UserCreate, UserRepository } from "../interface/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.respository";
import { User } from '../interface/user.interface';

class UserUseCase {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepositoryPrisma()
    }

    async create({name, email}: UserCreate): Promise<User>{
        const verifyUserExists =  await this.userRepository.fidByEmail(email);

        if(verifyUserExists){
            throw new Error('User already exists')
        }

        const result = await this.userRepository.create({ name, email})
    }
}

export { UserUseCase };