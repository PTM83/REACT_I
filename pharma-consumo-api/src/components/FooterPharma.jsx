import '../services/footerPharma.css'

export const FooterPharma = () => {
    return (
        <footer>

            <nav className='navPharma'>
                <p>
                Toda información entregada en esta página proviene del
                <a href='https://datos.gob.cl/dataset/farmacias-en-chile'> Link </a>
                . Que corresponde a información recopilada por el Gobierno de Chile.
                </p>
            </nav>

        </footer>
    )
}