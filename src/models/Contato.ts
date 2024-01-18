import * as enums from '../utils/enum/Contato'

class Contato {
  nomeContato: string
  prioridade: enums.Prioridade
  telefone: string
  email: string
  id: number

  constructor(
    nomeContato: string,
    prioridade: enums.Prioridade,
    telefone: string,
    email: string,
    id: number
  ) {
    this.nomeContato = nomeContato
    this.prioridade = prioridade
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default Contato
