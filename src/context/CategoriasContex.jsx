import React, { createContext, useState } from 'react';

// Crear el context 

export const CategoriasContext = createContext();


//El provider es de donde saldran los datos y las funciones y state. 

const CategoriasProvider = (props) => {

    // Crear el state del context 

    const[ hola, setHola ] = useState('Hola desde state');

    return (
        <CategoriasContext.Provider
            value={{
                hola,
                setHola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;