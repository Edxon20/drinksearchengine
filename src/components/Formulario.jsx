import React, { useContext } from 'react';
import { CategoriasContext } from '../context/CategoriasContex'



const Formulario = () =>{

    const { hola } = useContext(CategoriasContext);
    alert(hola)

    return(

        <form
            className='col-12'
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
                    />                    
                </div>
                <div className='col-md-4'>
                        <select
                            className='form-control'
                            name='categoria'
                        >
                            <option value=''>--Seleccione Categoria--</option>
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