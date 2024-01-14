import {RegionChile, getAPIState} from '../src/services/PharmaJs.js'
import {useState, useEffect} from 'react';
import {TablePharma} from '../src/components/TablePharma.jsx'
import {SearchPharma} from '../src/components/SearchPharma.jsx'


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
            <h1> Bienvenido al Buscador de Farmacias! </h1>
            <SearchPharma REGION={REGION} pharmaChile={pharmaChile} search={search} setSearch={setSearch}/>

            <main>
                <TablePharma dataPharma={result} />
            </main>
        </div>
    )
}