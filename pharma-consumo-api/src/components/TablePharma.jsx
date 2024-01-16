import '../services/TablaPharma.css'

export const TablePharma = ({ dataPharma }) => {
    return (

        <table className='principalTable'>
            <thead>
                <tr>
                    <th>DrugStore Name</th>
                    <th>Comuna</th>
                    <th>Address</th>
                    <th>Open</th>
                    <th>Closed</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {dataPharma.slice(0,30).map((user, index) =>
                    <tr key={index}>
                            <td>{user.local_nombre}</td>
                            <td>{user.comuna_nombre}</td>
                            <td>{user.local_direccion}</td>
                            <td>{user.funcionamiento_hora_apertura}</td>
                            <td>{user.funcionamiento_hora_cierre}</td>
                            <td>{user.local_telefono}</td>
                        </tr>
                )}
            </tbody>
        </table>

    )
}
