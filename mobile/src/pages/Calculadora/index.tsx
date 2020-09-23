import React, { useCallback, useState } from 'react'
import CalcButtonComponent from '../../components/CalcButton'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import 'number-to-locale-string-polyfill'

import { useTransacao } from '../../contexts/transacoes'
import { useTheme } from '../../contexts/themes'

import { Container, Header, Value, ButtonBlock, Buttons, Footer, TabItem, TabText } from './styles'
import formattedNumber from '../../utils/formatToReal'

const Calculadora: React.FC = () => {
  const [valueState, setValueState] = useState('0,00')
  const [active, setActive] = useState<boolean[]>([])

  const { changeState } = useTransacao()
  const { switchTheme } = useTheme()
  const navigation = useNavigation()

  useFocusEffect(useCallback(() => {
    toggleTabBar(0)
  }, []))

  const toggleTabBar = (id: number) => {
    switch (id) {
      case 0:
        switchTheme('green')
        setActive([true, false])
        break
      case 1:
        switchTheme('red')
        setActive([false, true])
        break
    }
  }

  const addValue = (valueParam: string) => {
    if (valueState.length === 14) return

    let valueStateFormatted = ''

    if (valueState === '0,00') {
      valueStateFormatted = formattedNumber(valueParam)
    } else {
      valueStateFormatted = formattedNumber(valueState + valueParam)
    }

    setValueState(valueStateFormatted)
  }

  const eraseValue = () => {
    const result = valueState
      .replace(/\D/g, '')
      .substring(1)

    const resultFormatted = formattedNumber(result)

    setValueState(resultFormatted)
  }

  const submitValue = async () => {
    const isNegative = !active[0]
    changeState({ valor: valueState, isNegative })
    navigation.navigate('Categorias')
  }

  return (
    <Container>
      <Header>
        <Value>
          R${valueState}
        </Value>
      </Header>

      <Buttons>
        <ButtonBlock>
          <CalcButtonComponent onPress={() => addValue('1')} title='1'/>
          <CalcButtonComponent onPress={() => addValue('2')} title='2'/>
          <CalcButtonComponent onPress={() => addValue('3')} title='3'/>
        </ButtonBlock>

        <ButtonBlock>
          <CalcButtonComponent onPress={() => addValue('4')} title='4'/>
          <CalcButtonComponent onPress={() => addValue('5')} title='5'/>
          <CalcButtonComponent onPress={() => addValue('6')} title='6'/>
        </ButtonBlock>

        <ButtonBlock>
          <CalcButtonComponent onPress={() => addValue('7')} title='7'/>
          <CalcButtonComponent onPress={() => addValue('8')} title='8'/>
          <CalcButtonComponent onPress={() => addValue('9')} title='9'/>
        </ButtonBlock>

        <ButtonBlock>
          <CalcButtonComponent onPress={ eraseValue } title='<'/>
          <CalcButtonComponent onPress={() => addValue('0')} title='0'/>
          <CalcButtonComponent onPress={submitValue} icon='check'/>
        </ButtonBlock>

      </Buttons>

      <Footer>
        <TabItem onPress={() => toggleTabBar(0)}>
          <TabText active={active[0]}>
          Depósito
          </TabText>
        </TabItem>

        <TabItem onPress={() => toggleTabBar(1)}>
          <TabText active={active[1]}>
          Retirada
          </TabText>
        </TabItem>
      </Footer>
    </Container>
  )
}

export default Calculadora
