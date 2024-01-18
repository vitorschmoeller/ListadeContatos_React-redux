import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/contatos'
import filtroReducer from './reducers/filtro'
const store = configureStore({
  reducer: {
    contatos: contatoReducer,
    filtro: filtroReducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
