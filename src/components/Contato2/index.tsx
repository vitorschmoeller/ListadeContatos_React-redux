import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import ContatoClass from '../../models/Contato'
import * as enums from '../../utils/enum/Contato'
import { remover, editar } from '../../store/reducers/contatos'
type Props = ContatoClass
const Contato2 = ({ nomeContato, prioridade, telefone, email, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [alterarNome, setAlterarNome] = useState('')
  const [alterarEmail, setAlterarEmail] = useState('')
  const [alterarTelefone, setAlterarTelefone] = useState('')
  const [alteraTag, setAlteraTag] = useState(enums.Prioridade.IMPORTANTE)
  return (
    <>
      <S.Card>
        {estaEditando ? (
          <S.InputNome
            required
            value={alterarNome}
            onChange={(evento) => setAlterarNome(evento.target.value)}
            type="text"
            placeholder="Nome do Contato"
          />
        ) : (
          <S.NomeContato>{nomeContato}</S.NomeContato>
        )}
        {estaEditando ? (
          <>
            <S.Botao onClick={() => setAlteraTag(enums.Prioridade.NORMAL)}>
              Normal
            </S.Botao>
            <S.BotaoImportante
              onClick={() => setAlteraTag(enums.Prioridade.IMPORTANTE)}
            >
              Importante
            </S.BotaoImportante>
          </>
        ) : (
          <S.Tag parametro="prioridade" prioridade={prioridade}>
            {prioridade}
          </S.Tag>
        )}
        {estaEditando ? (
          <S.Input
            required
            value={alterarEmail}
            onChange={(evento) => setAlterarEmail(evento.target.value)}
            type="email"
            placeholder="E-mail"
          ></S.Input>
        ) : (
          <S.Email>Email: {email}</S.Email>
        )}
        {estaEditando ? (
          <S.Input
            required
            value={alterarTelefone}
            onChange={(evento) => setAlterarTelefone(evento.target.value)}
            type="tel"
            min={0}
            placeholder="telefone"
          ></S.Input>
        ) : (
          <S.Telefone>Telefone: {telefone}</S.Telefone>
        )}
        <div>
          {estaEditando ? (
            <>
              <S.BotaoSalvar
                onClick={() => {
                  dispatch(
                    editar({
                      id,
                      nomeContato: alterarNome,
                      prioridade: alteraTag,
                      email: alterarEmail,
                      telefone: alterarTelefone
                    })
                  )
                  setEstaEditando(false)
                }}
              >
                Salvar
              </S.BotaoSalvar>
              <S.BotaoRemover onClick={() => setEstaEditando(false)}>
                Cancelar
              </S.BotaoRemover>
            </>
          ) : (
            <>
              <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
              <S.BotaoRemover onClick={() => dispatch(remover(id))}>
                remover
              </S.BotaoRemover>
            </>
          )}
        </div>
      </S.Card>
    </>
  )
}

export default Contato2
