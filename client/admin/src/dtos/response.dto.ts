export interface ResponseDTO<T> {
    status: number
    message: string
    results?: T,
    error?: any
}