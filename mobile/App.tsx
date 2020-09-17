import React from 'react'
import Routes from './src/routes'

import Contexts from './src/contexts/index'

const App = () => {
  return (
    <Contexts>
      <Routes />
    </Contexts>

  )
}

export default App
