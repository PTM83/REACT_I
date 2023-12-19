import '../assets/cssComponents/Alertcss.css'
import Button from 'react-bootstrap/Button';

const Alert = ({error, success}) => {
    return (

    <div className='Alertcss'>

        {error.length > 0 && <Button variant='danger' size='lg' disabled className='errorCss' >{error}</Button>}
        {success.length > 0 && <Button variant='success' size='lg' disabled className='successCss' >{success}</Button>}
    </div>
    )
}

export default Alert