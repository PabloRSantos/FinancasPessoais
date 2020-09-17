import React, { createContext, useContext, useState } from 'react'
import blue from '../styles/themes/blue'
import green from '../styles/themes/green'
import red from '../styles/themes/red'
import { DefaultTheme, ThemeProvider } from 'styled-components'

interface IContext {
    switchTheme: (newTheme: String) => void
    theme: DefaultTheme
}

const ThemeContext = createContext<IContext>({
  switchTheme: () => {},
  theme: blue
})

const ThemeContextProvider: React.FC = ({ children }) => {
  const [temaAtual, setTemaAtual] = useState(blue)

  function switchTheme (newTheme: String) {
    switch (newTheme) {
      case 'blue':
        setTemaAtual(blue)
        return
      case 'red':
        setTemaAtual(red)
        return
      case 'green':
        setTemaAtual(green)
    }
  }

  return (
    <ThemeContext.Provider value={{ switchTheme, theme: temaAtual }}>
      <ThemeProvider theme={temaAtual}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme () {
  const context = useContext(ThemeContext)

  return context
}

export default ThemeContextProvider
