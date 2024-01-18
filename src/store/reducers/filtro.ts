import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enum/Contato'
type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'todas'
  valor?: enums.Prioridade
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export default filtroSlice.reducer
export const { alteraTermo, alterarFiltro } = filtroSlice.actions
