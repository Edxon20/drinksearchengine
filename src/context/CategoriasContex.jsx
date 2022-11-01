import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// Crear el context 

export const CategoriasContext = createContext();


//El provider es de donde saldran los datos y las funciones y state. 

const CategoriasProvider = (props) => {

    // Crear el state del context 

    const [categorias, setCategorias] = useState([]);

    //Ejecutar el llamado a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);

            setCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, []);
    //Lo del return es lo que va a fluir
    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;