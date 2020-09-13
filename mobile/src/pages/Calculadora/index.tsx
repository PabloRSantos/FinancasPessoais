import React, { useState } from 'react'
import CalcButtonComponent from '../../components/CalcButton'

import { Container, Header, Value, ButtonBlock, Buttons } from './styles'

const Calculadora: React.FC = () => {
  const [valueState, setValueState] = useState('0,00')

  const addValue = (valueParam: number) => {
    const result = valueState + valueParam.toString()

    setValueState(result)
  }

  const eraseValue = () => {
    const result = valueState.substring(1)

    setValueState(result)
  }

  // const handleValue = (value: string, lenght: number) => {

  //   setValueState(value)
  // }

  return (
    <Container>
      <Header>
        <Value>
          R${valueState}
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
