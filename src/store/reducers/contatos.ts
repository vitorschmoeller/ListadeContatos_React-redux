import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enum/Contato'
type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nomeContato: 'Vitor Schmoeller',
      prioridade: enums.Prioridade.IMPORTANTE,
      email: 'vitor@gmail.com',
      telefone: '81 99654 0589'
    },
    {
      id: 2,
      nomeContato: 'Hellen Xexeira',
      prioridade: enums.Prioridade.IMPORTANTE,
      email: 'hellen@gmail.com',
      telefone: '81 97598 3058'
    },
    {
      id: 3,
      nomeContato: 'Wesley snipes',
      prioridade: enums.Prioridade.NORMAL,
      email: 'Wesleysinper@gmail.com',
      telefone: '81 97598 5058'
    }
  ]
}
const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (itemAtual) => itemAtual.telefone === action.payload.telefone
      )
      if (contatoJaExiste) {
        alert(`Já existe um contato salvo com esse número`)
      } else {
        const ultimaContato = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaContato ? ultimaContato.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
