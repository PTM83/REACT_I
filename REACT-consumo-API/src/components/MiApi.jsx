import { useState, useEffect } from 'react';
import { RegionChile } from '../assets/PharmaJS/Region';
import '../assets/PharmaCSS/pharma.css'

const MiApi = () => {

    const [pharmas, setPharma] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedRegion, setSelectedRegion] = useState(''); //agregado
    const [selectedComuna, setSelectedComuna] = useState('');
    const [allComunas, setAllComunas] = useState([]);
    const [idRegion, setIdRegion] = useState(null);
    const [results, setResults] = useState([]);


    //Función que permite obtener el ID de acuerdo a la región seleccionada

    function obtenerIdPorRegion(nombreRegion) {
      const regionEncontrada = RegionChile.find(region => region.region === nombreRegion);
      return regionEncontrada ? regionEncontrada.id : null;
    }


    //Consumo APPi

    const url = "https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php"
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPharma(data)
    };

    useEffect(()=> {
        getData();
    }, []);

    //Busqueda de Datos

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    //Seleccionando una Region
    const handleRegionChange = (e) => {
        const nombreRegion = e.target.value;
        setSelectedRegion(nombreRegion);
        const id = obtenerIdPorRegion(nombreRegion);
        //console.log(idRegion);
        setIdRegion(id);
    }

   const handleComunaChange = (e) => {
        const nombreComuna = e.target.value;
        setSelectedComuna(nombreComuna);
    }

    //Para las Comunas
    useEffect(() => {
        const pharmasInRegion = pharmas.filter(pharma => pharma.fk_region === idRegion);

        // Al cargar los datos, tambien se establecen todas las comunas posibles
        const comunaNames = [...new Set(pharmasInRegion.map(pharma => pharma.comuna_nombre))];
        const sortComunas = comunaNames.sort((a,b) => a.localeCompare(b))
        setAllComunas(sortComunas);
    },[pharmas, idRegion]);

    useEffect(() => {
        let filteredPharmas = [...pharmas];

        if(idRegion) {
            filteredPharmas = filteredPharmas.filter(pharma => pharma.fk_region === idRegion);
        }

        if(selectedComuna) {
            filteredPharmas = filteredPharmas.filter(pharma => pharma.comuna_nombre === selectedComuna);
        }

        if(search) {
            filteredPharmas = filteredPharmas.filter(pharma =>
            pharma.local_nombre.toLowerCase().includes(search.toLowerCase())
            );
        }
        setResults(filteredPharmas);
    },[pharmas, idRegion, selectedComuna, search]);

    //Ordenar Comunas de forma alfabética

    const COMUNAS = results.map(comuna => comuna.comuna_nombre);
    const SortCOMUNAS = COMUNAS.sort((a,b) => a.localeCompare(b));


    //Filtrar Informacion
    /*let results = []

    if(!search) {
        results = pharmas;
    } else {
        results = pharmas.filter((pharma) => {
            return pharma.local_nombre.toLowerCase().includes(search.toLowerCase())
        });
    };*/

    return (

    <div className='MiApiCSS'>

        <h2>FARMACIAS DE TURNOS</h2>

        <section className="RegionComuna">

            <div className="LabelSelect">
            <label>Región</label>

            <select onChange={handleRegionChange} value={selectedRegion}>
            <option value="">Todas Las Regiones</option>
                {RegionChile.map((chile, index) =>
                    <option key={index} value={chile.region}> {chile.region}</option>
                    )}
            </select>
            </div>

            <div className="LabelSelect">
            <label>Comuna</label>

            <select onChange={handleComunaChange} value={selectedComuna}>
            <option value="">Todas Las Comunas</option>
            {allComunas.map((comuna, index) =>
                <option key={index} value={comuna}>{comuna}</option>
             )}

            </select>
            </div>
        </section>

        <input
            type="text"
            placeholder="search"
            className="form-control"
            value={search}
            onChange={handleSearch}
            />
        <table className="table table-striped table-hover my-4 shadow-lg">
            <thead>
                <tr>
                <th>Framacia</th>
                <th>Dirección</th>
                <th>Apertura</th>
                <th>Cierre</th>
                <th>Teléfono</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {results.map((user, index) =>
                    <tr key={index}>
                        <td>{user.local_nombre}</td>
                        <td>{user.local_direccion}</td>
                        <td>{user.funcionamiento_hora_apertura}</td>
                        <td>{user.funcionamiento_hora_cierre}</td>
                        <td>{user.local_telefono}</td>
                    </tr>
                )}
            </tbody>
        </table>


    </div>

    )
}

export default MiApi