import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';
import '../assets/cssComponents/Registrocss.css'

import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'
import facebook from '../assets/img/facebook.png'

const Registro = ({error, setError, success, setSuccess}) => {

    return (
    <div className='RegistroCss'>
        <h1> Crea una cuenta </h1>
        <SocialButton linkedin={linkedin} github={github} facebook={facebook}/>
        <h2> O usa tu email para registrarte </h2>
        <Formulario error={error} setError={setError} setSuccess={setSuccess} />
        <Alert error={error} success={success}/>
    </div>
    )
}

export default Registro