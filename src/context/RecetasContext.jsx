import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();


const RecetasProvider = (props) => {

    //Este sera el resultado de la consulta
    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    });

    const {nombre,categoria} = busqueda;

    useEffect( () => {

        const obtenerRecetas = async () =>{
            //No olvidar el https
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`


        }
    }, [busqueda]);

    return (

        <RecetasContext.Provider
            value={{
                buscarRecetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;