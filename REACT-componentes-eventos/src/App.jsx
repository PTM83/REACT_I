import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'

function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <>
        <Registro success={success} setSuccess={setSuccess} error={error} setError={setError}/>
    </>
  )
}

export default App
