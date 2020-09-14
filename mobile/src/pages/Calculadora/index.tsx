import React, { useState } from 'react'
import CalcButtonComponent from '../../components/CalcButton'
import 'number-to-locale-string-polyfill'

import { Container, Header, Value, ButtonBlock, Buttons } from './styles'

const Calculadora: React.FC = () => {
  const [valueState, setValueState] = useState('R$0,00')

  const addValue = (valueParam: number) => {
    const valueStateFormatted = Number(valueState.toString()
      .replace('R$', '')
      .replace(',', '')
      .replace('.', ''))

    let result = 0

    if (valueState === 'R$0,00') {
      result = valueParam
    } else {
      result = Number(valueStateFormatted + valueParam.toString())
    }

    const formattedResult = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    setValueState(formattedResult)
  }

  const eraseValue = () => {
    const result = valueState.substring(1)

    // const formattedResult = Number(result).toLocaleString('pt-BR')

    setValueState(result)
  }

  return (
    <Container>
      <Header>
        <Value>
          {valueState}
        </Value>
      </Header>

      <Buttons>
        <ButtonBlock>
          <CalcButtonComponent onPress={() => addValue(1)} title='1'/>
          <CalcButtonComponent onPress={() => addValue(2)} title='2'/>
          <CalcButtonComponent onPress={() => addValue(3)} title='3'/>
        </ButtonBlock>

        <ButtonBlock>
          <CalcButtonComponent onPress={() => addValue(4)} title='4'/>
          <CalcButtonComponent onPress={() => addValue(5)} title='5'/>
          <CalcButtonComponent onPress={() => addValue(6)} title='6'/>
        </ButtonBlock>

        <ButtonBlock>
          <CalcButtonComponent onPress={() => addValue(7)} title='7'/>
          <CalcButtonComponent onPress={() => addValue(8)} title='8'/>
          <CalcButtonComponent onPress={() => addValue(9)} title='9'/>
        </ButtonBlock>

        <ButtonBlock>
          <CalcButtonComponent onPress={ eraseValue } title='<'/>
          <CalcButtonComponent onPress={() => addValue(0)} title='0'/>
          <CalcButtonComponent title='v'/>
        </ButtonBlock>

      </Buttons>
    </Container>
  )
}

export default Calculadora
