import {useState, useEffect} from 'react'

export const SearchPharma = ({REGION, pharmaChile, search, setSearch}) => {

    const [comunaChile, setComunaChile] = useState([]);
    const [searchID, setSearchID] = useState('');

//     const [search, setSearch] = useState('');
    const [selectComuna, setSelectComuna] = useState('');
    const [selectRegion, setSelectRegion] = useState('Todas las Regiones');

 //Ordenar Nombre de las Comunas y Muestra los resultados únicos.
    useEffect(() => {
        const uniqueComunas = [...new Set(pharmaChile.map(comuna => comuna.comuna_nombre))]
        const sortComunas = uniqueComunas.sort((a,b)=>a.localeCompare(b))

        setComunaChile(sortComunas)
    } ,[pharmaChile])


    //HandleSearch Buscar Nombre Farmacias
    const handleSearch = (e) => {
        //Almacenar el search dentro del estado HandleSearch
        setSearch(e.target.value);
        //console.log(search)
    }

    //Seleccionar Region y obtener el ID de la Región seleccionada

    const handleRegion = (e) => {
        const nombreRegion = e.target.value;
        setSelectRegion(nombreRegion)
    }


    // Selecionar Comuna
    const handleComuna = (e) => {
        const nombreComuna = e.target.value;
        setSelectComuna(nombreComuna)
    }

    // Encontrar el ID por REGION
    useEffect(() => {
        // Asegúrate de que la región seleccionada tenga un valor significativo
        if(selectRegion === '') {
        //Restablecer a todos los datos
            setSearch(pharmaChile)
        } else if (selectRegion && selectRegion.length > 0) {
            // Buscar ID de la región seleccionada
            const findRegion = REGION.find(region => region.region === selectRegion);

            if (findRegion) {
                //Filtrar datos basados en la región seleccionada.
                const PruebaData = [...pharmaChile].filter(data => data.fk_region === findRegion.id);
                // Si se encuentra la región, actualiza el ID de búsqueda
                setSearchID(findRegion.id);
                setSearch(PruebaData);
//                 console.log(`Region seleccionada: ${selectRegion}, con una ID: ${findRegion.id}`);
//                 console.log(typeof PruebaData);
            } else {
                // Si no se encuentra la región, posiblemente mostrar un error o mensaje
                console.log('Región no encontrada:', selectRegion);
            }
        } else {
            // Manejar el caso cuando selectRegion es vacío o no válido
            console.log('Región no seleccionada o valor inválido');
        }
    }, [selectRegion, pharmaChile, REGION]);

    // Encontrar el ID por COMUNA
    useEffect(()=> {
        // Asegúrate de que la región seleccionada tenga un valor significativo
        if(selectComuna === '') {
        //Restablecer a todos los datos
            setSearch(pharmaChile)

        } else if(selectComuna && selectComuna.length > 0) {
            const findComuna = [...pharmaChile].find(comuna => comuna.comuna_nombre === selectComuna)

            if(findComuna) {
             //Filtrar datos basados en la región seleccionada.
                //Se Obtiene la primera Data Base que toma todos los datos con el ID de la Comuna
                const PruebaData = [...pharmaChile].filter(data => data.fk_region === findComuna.fk_region);
                //Con esa DATA BASE obtener de acuerdo al nombre de la COMUNA.
                const PruebaDataB = [...PruebaData].filter(data => data.comuna_nombre === selectComuna);
                //Entrega del ID de la Región
                setSearchID(findComuna.fk_region) //<---Entrega el ID de la Region
                //Presenta toda la BASE de DATOS con su respecto Nombre de la COMUNA
                setSearch(PruebaDataB);
                console.log(`Comuna seleccionada: ${selectComuna}, con una ID ${findComuna.fk_region}`)
            }
            else {
                console.log('Comuna no encontrada:', selectComuna)
            }
        } else {
        // Manejar el caso cuando selectRegion es vacío o no válido
            console.log('Región no seleccionada o valor inválido');
        }
    }, [selectComuna, pharmaChile] )


    return (

    <header>
        {<input
        type='text'
        placeholder='Pharma Search'
        value={typeof search === 'string' ? search : ''}
        onChange= {handleSearch}
        />}

        <select onChange={handleRegion} value={selectRegion}>
            <option value=''>Todas las Regiones</option>
            {REGION && REGION.map( (region) => (
                <option key={region.id}> {region.region} </option>
            )
            )}
        </select>

        <select onChange={handleComuna} value={selectComuna}>
            <option value=''>Todas las Comunas</option>
            {comunaChile && comunaChile.map((comuna, index) =>
            <option key={index}>{comuna}</option>
            )}
        </select>
    </header>

    )
}