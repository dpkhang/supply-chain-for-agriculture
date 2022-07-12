interface Response {
    status: number,
    message: string,
    results?: any
}

export class ResponseDTO {

    success = (message: string, data?: any): Response => {
        return {
            status : 200,
            message: message,
            results: data
        }
    }

    badRequest  = (): Response => {
        return {
            status: 400,
            message: "Yeu cau khong duoc phu hop."
        }
    }

    unauthorization = (): Response => {
        return {
            status: 401,
            message: "Xac thuc khong thanh cong."
        }
    }

    forbiden = (): Response => {
        return {
            status: 403, 
            message: "Khong co quyen ket noi den."
        }
    }

    urlNotFound = (): Response => {
        return {
            status: 404,
            message: "Duong dan khong duoc thanh lap."
        }
    }

    serverError = (): Response => {
        return {
            status: 500,
            message: "Loi may chu",
        }
    }

    reponseWithOther = (status: number, message: string, data?: any): Response => {
        return {
            status: status,
            message: message,
            results: data
        }
    }
}


