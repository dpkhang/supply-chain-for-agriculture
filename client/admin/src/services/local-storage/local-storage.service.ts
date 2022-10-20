export const getStorage = (key:string) => {
    return localStorage.getItem(key)
}

export const setStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}

export const remove = (key: string) => {
    return localStorage.removeItem(key)
}