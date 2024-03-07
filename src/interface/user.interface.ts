export interface User{
    id: String;
    email: String;
    name: String;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserCreate {
    email: string;
    name: string;
}

export interface UserRepository {
    create(data: UserCreate): Promise<User>
    fidByEmail(email: string): Promise<User | null> 
}