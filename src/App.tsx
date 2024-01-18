import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal from './styles'
import { Container } from './styles'
// import ListaDeContatos from './containers/ListaDeContatos'
// import BarraLateral from './containers/BarraLateral'
import store from './store/index'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <Container>
        <EstiloGlobal />
        <RouterProvider router={rotas} />
        {/* <BarraLateral />
        <ListaDeContatos /> */}
      </Container>
    </Provider>
  )
}

export default App
