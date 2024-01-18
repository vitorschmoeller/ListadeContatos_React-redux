import styled from 'styled-components'
import { Botao } from '../../components/Contato2/styles'
export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  label {
    margin-right: 6px;
  }
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  margin-bottom: 16px;
`
export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }
`
export const BotaoCadastrar = styled(Botao)`
  background-color: blue;
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
