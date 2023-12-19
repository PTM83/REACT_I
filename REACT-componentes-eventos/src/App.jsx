import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'
{/*Import Bootstrap*/}
import 'bootstrap/dist/css/bootstrap.min.css';



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
