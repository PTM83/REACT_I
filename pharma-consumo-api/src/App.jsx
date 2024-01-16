import {RegionChile, getAPIState} from '../src/services/PharmaJs.js'
import {useState, useEffect} from 'react';
import {TablePharma} from '../src/components/TablePharma.jsx'
import {SearchPharma} from '../src/components/SearchPharma.jsx'
import './services/AppCss.css'
import { FooterPharma } from '../src/components/FooterPharma.jsx'


export const App = () => {

    //Constante a usar en el sistema
    const REGION = RegionChile;

    //USESTATE
    const [pharmaChile, setPharmaChile] = useState([]);
    const [search, setSearch] = useState('');

    //Llamar la API.
    useEffect( () => {
        getAPIState(setPharmaChile);

    },[]);

    let result;
    if(typeof search === 'string') {
        result = [...pharmaChile].filter(pharma => {
            return pharma.local_nombre.toLowerCase().includes(search.toLowerCase())
        })
    } else if (typeof search === 'object') {
        result = search;
    } else {
        result = pharmaChile
    }

//     const result = typeof search === 'string'
//         ? pharmaChile.filter(pharma => {
//             return pharma.local_nombre.toLowerCase().includes(search.toLowerCase())
//         })
//         : pharmaChile;




    return (
        <div>
            <h1 className='appH1'> Bienvenido al Buscador de Farmacias! </h1>

            <div className="introductionPharma">
                <p>Buscador de Farmacias de turno que se encuentra en Chile.
                Con un total de <b>{pharmaChile.length} farmacias</b> encontrada a nivel país, se puede
                proceder a buscar Farmacias tanto por el nombre de la farmacia, como también
                buscar en una Región en particular y por último buscar por comuna.
                </p>
                <p>La tabla que se encuentra a continuación podrá no sólo ver el nombre de la Farmacias,
                sino que también, podrá ver la comuna dónde se encuentra, su dirección y el número de
                telefóno al cual llamar.
                </p>
            </div>

            <SearchPharma REGION={REGION} pharmaChile={pharmaChile} search={search} setSearch={setSearch}/>

            <main>
                <TablePharma dataPharma={result} />
            </main>
            <FooterPharma />
        </div>
    )
}