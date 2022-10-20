export interface User {
    id: number
    fullName: string
    dob: string
}

export interface UserState {
    users: User[],
    user: User
}