import React from 'react';
import {useState, useEffect} from 'react';



const MainCard = () => {
    
    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState({});
      
      
    useEffect(() =>
    fetch("http://localhost:3001/users/api/v1/info")

      .then(res => res.json())
      .then(res => setPlanets({ planets: res }))
      .catch(() => setErrors({ hasErrors: true }))
  );
  return <div></div>;
};



// async function MainCard(props){
//     console.log(props);
//     var cantUsuarios
//     var resultado = await fetch("http://localhost:3001/users/api/v1/info")
//     const data = await resultado.json();

//     cantUsuarios = data.count.cantidadUsuarios;
//     console.log(cantUsuarios + "asd");

    // if(props.usuarios){
    //     return(
    //         <div>
    //             <p>Usuarios registrados en el sistema: {cantUsuarios}</p>
    //         </div>
    //     )
    // }else if(props.arbol){
    //     return(
    //         <div>
    //             <p>Este es el props arbol</p>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             <p>Este componente no tiene props</p>
    //         </div>
    //     )
    // }

    // return(
    //     <div>
    //         <p>Hola mundo: Cantidad de usuarios en el sistema:{props.usuarios}</p>
    //     </div>
    // )
// };

export default MainCard
