import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Main, Resultado } from '../../styles'
import * as enums from '../../utils/enum/Contato'
import { Form, Campo, Opcoes, BotaoCadastrar, Opcao } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nomeContato, setNomeContato] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)
  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nomeContato,
        prioridade,
        telefone,
        email
      })
    )
    navigate('/')
  }
  return (
    <Main>
      <Resultado>Novo Contato</Resultado>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nomeContato}
          type="text"
          onChange={(evento) => setNomeContato(evento.target.value)}
          placeholder="Nome"
        />
        <Campo
          value={email}
          type="email"
          placeholder="E-mail"
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <Campo
          value={telefone}
          type="tel"
          placeholder="Telefone"
          onChange={(evento) => setTelefone(evento.target.value)}
        />
        <Opcoes>
          <p>Prioridade</p>

          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
    </Main>
  )
}

export default Formulario
