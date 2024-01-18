import * as S from './styles'
import * as enums from '../../utils/enum/Contato'
import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
export type Props = {
  legenda: string
  criterio: 'prioridade' | 'todas'
  valor?: enums.Prioridade
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)
  const verificaEstaAtivo = () => {
    //essas constantes estão se comportando como booleano!
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor
    //As duas constantes devem ser true para se ter um retorno
    return mesmoCriterio && mesmoValor
  }

  function contarTarefas() {
    if (criterio === 'todas') return contatos.itens.length
    if (criterio === 'prioridade') {
      return contatos.itens.filter(
        (itemAtual) => itemAtual.prioridade === valor
      ).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaEstaAtivo()
  const contador = contarTarefas()
  return (
    <>
      <S.Card onClick={filtrar} ativo={ativo}>
        <S.Contador>{contador}</S.Contador>
        <S.Label>{legenda}</S.Label>
      </S.Card>
    </>
  )
}

export default FiltroCard
