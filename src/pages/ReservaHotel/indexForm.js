import React, { Component } from 'react';


const Formrest = () => {
   
        return (
            
            <div>
               <div>
                <h2>FORMULARIO DE RESERVA</h2> 
               </div>
               <form>
                   <label htmlFor="nombre"></label>
                   <input name="nombre" 
                          type="text" 
                          placeholder="Ingresa tu Nombre" 
                          />
                    <label htmlFor="apellido"></label>
                    <input name="apellido" 
                          type="text" 
                          placeholder="Ingresa tu Apellido" 
                          />
                    <label htmlFor="email"></label>
                    <input name="email" 
                           type="email" 
                           placeholder="Ejemplo@gmail.com" 
                           />
                    <label htmlFor="telefono"></label>
                    <input name="telefono" 
                           type="number" 
                           placeholder="" 
                           />
                    <label htmlFor="fecha ingreso"></label>
                    <input name="fecha de ingreso" 
                           type="date" 
                           placeholder="" 
                           />
                    <label htmlFor="fecha salida"></label>
                    <input name="fecha de salida" 
                           type="date" 
                           placeholder="" 
                           />
               </form>
           </div> 
        );
    }


export default Formrest;