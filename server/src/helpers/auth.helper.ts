import jwt from 'jsonwebtoken'

const createToken =async  (payload: any, secretKey: string,  expiresIn?: string): Promise<string> => {
    const token = await jwt.sign(payload, secretKey, { expiresIn:  expiresIn? expiresIn: undefined })
    return token;
}

const verifyToken = async (token: string, secretKey: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                return reject(error);
            }
            resolve(decoded);
        });
    });
}

export  {
    createToken,
    verifyToken,
}