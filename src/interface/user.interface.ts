export interface User{
    id: String;
    email: String;
    name: String
}

export interface UserCreate {
    email: String;
    name: String;
}

export interface UserRepository {
    create(data: UserCreate): Promise<User>
}