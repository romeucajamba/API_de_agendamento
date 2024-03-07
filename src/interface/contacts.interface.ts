export interface Contacts {
    id: string;
    name: string;
    email: string;
    phone: string;
    userId?: string
}


export interface ContactCreate {
    name: string;
    email: string;
    phone: string;
    userEmail?: string;
}

export interface ContactCreateData {
    name: string;
    email: string;
    phone: string;
    userId?: string;
}
 interface ContactRepository {
    create(data: ContactCreateData): Promise<Contacts>;
    findEmailOrPhone(email: String, phone: String): Promise<Contacts | null>;
    findAllContacts(userId: string): Promise<Contacts[]>
}

export { ContactRepository }