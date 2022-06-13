import { api } from "./base/base.service"


class TransactionService {
  async getAll() {
    const result =  await api('GET', '/transaction')
    return result
  }

  async getById(id: number) {
    const result = await api('GET', `/transaction/${id}`)
    return result
  }
}

export {
  TransactionService
}