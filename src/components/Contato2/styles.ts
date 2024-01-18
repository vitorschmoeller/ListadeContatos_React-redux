import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enum/Contato'
type TagProps = {
  prioridade?: enums.Prioridade
  parametro: 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.IMPORTANTE) return variaveis.azul
    if (props.prioridade === enums.Prioridade.NORMAL) return variaveis.verde
  }
  return '#eee'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 32px;
`
export const NomeContato = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-left: 8px;
`
export const Input = styled.input`
  padding: 6px 12px;
  display: block;
  border-radius: 6px;
  margin-top: 6px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  outline: none;
  font-family: 'Roboto Mono', monospace;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #2ecc71;
  }
`
export const InputNome = styled(Input)`
  margin-left: 8px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  margin-bottom: 8px;
  margin-top: 8px;
`
export const Email = styled.span`
  display: block;
  font-size: 16px;
  font-family: 'Roboto Mono', monospace;
`
export const Telefone = styled.span`
  font-size: 16px;
  font-family: 'Roboto Mono', monospace;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 8px;
  margin-right: 8px;
  margin-top: 16px;
`
export const BotaoImportante = styled(Botao)`
  background-color: ${variaveis.azul};
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
