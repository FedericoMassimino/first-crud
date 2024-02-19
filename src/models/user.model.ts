export interface User {
    id: string,
    name: {
        surName: string,
        lastName: string
    }
    age: string,
    email: string,
    password: string,
}