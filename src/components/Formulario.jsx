import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContex'
import { RecetasContext } from '../context/RecetasContext'



const Formulario = () =>{    
    
        
    
    //No todo se pasara por context tambien se puede usar useState locales. 
    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: '',
    });

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas } = useContext(RecetasContext);

    //Funcion para leer los contenidos 
    const obtenerDatosReceta = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value


        })
    }
    return(       
        
        <form
            className='col-12'
            onSubmit={
                //Esto de e lo hacemos aca mismo o podemos crear una funcion adicional.
                e=>{
                    e.preventDefault();
                    buscarRecetas(busqueda);                    
                }
            }
        >
            <fieldset className='text-center'>
                <legend>Busca bebidas por categoria O ingrediente</legend>
            </fieldset>

            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input 
                        name='nombre'
                        className='form-control'
                        type='text'
                        placeholder='Buscar por ingrediente'
                        onChange={obtenerDatosReceta}
                    />                    
                </div>
                <div className='col-md-4'>
                        <select
                            className='form-control'
                            name='categoria'
                            onChange={obtenerDatosReceta}
                        >
                            <option value=''>--Seleccione Categoria--</option>
                            {categorias.map(categoria => (

                                <option 
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}

                            > {categoria.strCategory} </option>
                            ))}
                        </select>
                    </div>
                <div className='col-md-4'>
                    <input 
                        type='submit'
                        className='btn btn-block btn-primary'
                        value='Buscar Bebidas'
                    />
                </div>
            </div>
        </form>

    )


}

export default Formulario;