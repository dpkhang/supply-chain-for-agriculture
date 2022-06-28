interface xavienCreateDto {
    id_xavien: number
    id_hoptacxa: number
    fullname: string
    password: string
    DOB: Date
    address: string
    phone_number: string
    avatar?: string
    email: string
    wallet?: string
}

interface xavienInputCreateDto {
    id_hoptacxa: number
    fullname: string
    password: string
    DOB: string
    address: string
    phone_number: string
    avatar?: string
    email: string
    wallet?: string
}

interface xavienDto {
    id_xavien: number
    id_hoptacxa: number
    fullname: string
    password: string
    DOB: Date
    address: string
    phone_number: string
    avatar: string
    email: string
    wallet: string
}

export {
    xavienCreateDto,
    xavienInputCreateDto,
    xavienDto
}