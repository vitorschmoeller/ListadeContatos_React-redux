import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/index'
import Contato from '../../components/Contato2'
import * as S from './styles'
import { Main, Resultado } from '../../styles'
import * as enums from '../../utils/enum/Contato'

const ListaDeContatos = () => {
  //estamos usando o usSelector para preencher nossa lista de Contatos
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )
  //essa função vai retorna uma nova array filtrada e só vai retornar contatos que estejam de acordo com o que foi digitado dentro do campo de pesquisa(termo)
  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (itemAtual) =>
          itemAtual.nomeContato.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''
    const s = quantidade > 1 ? 's' : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato${s} encontrado${s} como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} contato${s} encontrado${s} como: "${`${criterio}=${valor}" ${complementacao}`}`
    }
    return mensagem
  }

  const contatos = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <Main>
      <S.Titulo>Lista de contatos</S.Titulo>
      <Resultado>{mensagem}</Resultado>

      <ul>
        {contatos.map((c) => (
          <li key={c.nomeContato}>
            <Contato
              id={c.id}
              nomeContato={c.nomeContato}
              prioridade={c.prioridade}
              telefone={c.telefone}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </Main>
  )
}

export default ListaDeContatos
