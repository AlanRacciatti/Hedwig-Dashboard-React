import React from 'react';
import {useState, useEffect, useRef} from 'react';


function MainCard(props){
    var cantUsuarios
    fetch("http://localhost:3001/users/api/v1/info")
    .then(response=>response.json())
    .then(data=> {
       cantUsuarios = data.count.cantidadUsuarios;
    })
    console.log(cantUsuarios + "asd");

    if(props.usuarios){
        return(
            <div>
                <p>Usuarios registrados en el sistema: {cantUsuarios}</p>
            </div>
        )
    }else if(props.arbol){
        return(
            <div>
                <p>Este es el props arbol</p>
            </div>
        )
    }else{
        return(
            <div>
                <p>Este componente no tiene props</p>
            </div>
        )
    }

    // return(
    //     <div>
    //         <p>Hola mundo: Cantidad de usuarios en el sistema:{props.usuarios}</p>
    //     </div>
    // )
};

export default MainCard
