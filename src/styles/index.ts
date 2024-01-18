import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`
export const Main = styled.main`
  display: block;
  padding-top: 20px;
  margin-left: 26px;
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Resultado = styled.p`
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin: 40px 0;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export default EstiloGlobal
