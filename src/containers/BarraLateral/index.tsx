import FiltroCard from '../../components/FiltroCard'
import { alteraTermo } from '../../store/reducers/filtro'
import * as S from './styles'
import { RootReducer } from '../../store/index'
import { useDispatch, useSelector } from 'react-redux'
import { Campo } from '../../styles'
import * as enums from '../../utils/enum/Contato'
import { Botao } from '../../components/Contato2/styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}
const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <>
      <S.Aside>
        <div>
          {mostrarFiltros ? (
            <>
              <Campo
                value={termo}
                type="text"
                placeholder="pesquisar contato"
                onChange={(evento) =>
                  dispatch(alteraTermo(evento.target.value))
                }
              />

              <S.Filtros>
                <FiltroCard
                  valor={enums.Prioridade.IMPORTANTE}
                  criterio="prioridade"
                  legenda={enums.Prioridade.IMPORTANTE}
                />
                <FiltroCard
                  legenda={enums.Prioridade.NORMAL}
                  valor={enums.Prioridade.NORMAL}
                  criterio="prioridade"
                />
                <FiltroCard legenda="todas" criterio="todas" />
              </S.Filtros>
            </>
          ) : (
            <>
              <Botao type="button" onClick={() => navigate('/')}>
                Voltar para lista de contatos
              </Botao>
            </>
          )}
        </div>
      </S.Aside>
    </>
  )
}
export default BarraLateral
