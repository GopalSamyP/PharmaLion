import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Login } from './components'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </>
  )
}

export default App
