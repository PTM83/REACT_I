import { useState, useEffect } from 'react';
import { RegionChile } from './assets/PharmaJS/RegionChile';

const MiApi = () => {

    const [pharmas, setPharma] = useState([]);
    const [search, setSearch] = useState("");


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

    //Filtrar Informacion

    let results = []

    if(!search) {
        results = pharmas;
    } else {
        results = pharmas.filter((pharma) => {
            return pharma.local_nombre.toLowerCase().includes(search.toLowerCase())
        });
    };

    return (

    <div className='MiApiCSS'>

        <h2>FARMACIAS DE TURNOS</h2>

        <section className="RegionComuna">
            <label>Región</label>
            <select>
                {RegionChile.map((chile, index) =>
                    <option key={index}> {chile.region}</option>
                    )}
            </select>
            <label>Comuna</label>
            <select>
                {results.map((comuna, index) =>
                    <option key={index}> {comuna.comuna_nombre}</option>
                    )}
            </select>
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
            <tbody>
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