# BUSCADOR DE FARMACIA

- Se hace uso de la API: https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php
- Se obtiene desde la web: https://datos.gob.cl/dataset/farmacias-en-chile
- Primer component `SearchPharma.jsx` que se encarga de generar la búsqueda.
- Segundo component `TablePharma.jsx` muestra la tabla con la información.

## Las llaves de la Base de Datos

    "fecha"
    "local_id"
    "fk_region"
    "fk_comuna"
    "fk_localidad"
    "local_nombre"
    "comuna_nombre"
    "localidad_nombre"
    "local_direccion"
    "funcionamiento_hora_apertura"
    "funcionamiento_hora_cierre"
    "local_telefono"
    "local_lat"
    "local_lng"
    "funcionamiento_dia"

## Dificultad del desafío

Se presentan tres formas de realizar búsqueda de farmacias.
1. Un `input` que permite buscar Farmacias por nombre.
2. `Scroll de Regiones` permite separar farmacias de acuerdo a la región seleccionada.
3. `Scroll de Comuna` permite separar las farmacias que se encuentra en la comuna.
