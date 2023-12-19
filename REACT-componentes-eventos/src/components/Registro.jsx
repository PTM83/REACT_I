
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = ({error, setError, success, setSuccess}) => {

    return (
    <div>


        <Formulario error={error} setError={setError} setSuccess={setSuccess} />
        <Alert error={error} success={success}/>
    </div>
    )
}

export default Registro