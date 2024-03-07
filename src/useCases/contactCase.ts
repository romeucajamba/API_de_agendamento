import {ContactRepository, ContactCreate } from "../interface/contacts.interface";
import { ContactsRepositoryPrisma } from '../repositories/contacts.repository';
import { UserRepositoryPrisma } from '../repositories/user.respository';
import { UserRepository } from '../interface/user.interface';

export class ContactsCases {
    private contectRepository: ContactRepository;
    private userRepository : UserRepository;

    constructor () {
        this.contectRepository = new ContactsRepositoryPrisma();
        this.userRepository = new UserRepositoryPrisma();
    }
    async create({email, name, phone, userEmail}: ContactCreate){
        const user = await this.userRepository.fidByEmail(userEmail);

        if(!user) {
            throw new Error('Usuário não existente')
        }

        const verify = await this.contectRepository.findEmailOrPhone(email, phone);

        if(!verify) {
            throw new Error('Usuário não existente')
        }
        const contact = await this.contectRepository.create({
            email,
            name,
            phone,
            userId: user.id
        })
    }
}
