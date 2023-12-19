import { useState } from 'react';
import '../assets/cssComponents/cssFormulario.css'

const Formulario = ({error, setError, setSuccess}) => {

    const regexParaNombre = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;
    const regexParaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault()

        if (nombre.length === 0) {
            return setError("Nombre no puede estar vacio")
        } else if (!regexParaNombre.test(nombre)) {
            return setError("Nombre no puede contener numeros ni simbolos")
        } else if (email.length === 0) {
            return setError("Campo email no puede estar vacio")
        } else if (!regexParaEmail.test(email)) {
            return setError("Mail debe ser user@example.com")
        }
        setSuccess("Perfecto!");
        setError("")
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className = 'FormularioCss' autoComplete='off'>
                <input type='text' placeholder="Nombre" value={nombre}
                onChange={(e) => setNombre(e.target.value)} autoFocus />

                <input type='text' placeholder="user@example.com" value={email}
                onChange={(a) => setEmail(a.target.value)} autoFocus />
                <button type='submit'> Mostrar nombre </button>
            </form>
        </div>
    )
}

export default Formulario