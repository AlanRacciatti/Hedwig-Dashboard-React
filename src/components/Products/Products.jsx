import React from 'react'
import { useState, useEffect } from 'react'

function Products() {
    const [productos, setProductos] = useState({productos: {productos: {products: [{}]}}})
    const [autores, setAutores] = useState({})
    const [generos, setGeneros] = useState({})

    useEffect(() => {
        fetch("https://libreria-hedwig.herokuapp.com/products/api/v1/info")
        .then(res => res.json())
        .then(res => { setProductos({ productos: res }) })

        fetch("https://libreria-hedwig.herokuapp.com/products/api/v1/autores")
        .then(res => res.json())
        .then(res => { setAutores({ autores: res }) })

        fetch("https://libreria-hedwig.herokuapp.com/products/api/v1/generos")
        .then(res => res.json())
        .then(res => { setGeneros({ generos: res }) })
    }, [])

    return (
    <table className="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Imagen</th>
            <th scope="col">Título</th>
            <th scope="col">Valoración</th>
            <th scope="col">Oferta (%)</th>
            <th scope="col">Compras</th>
            <th scope="col">Editorial</th>
            <th scope="col">Autor</th>
            <th scope="col">Genero</th>
            <th scope="col">Link</th>
            </tr>
        </thead>
        <tbody>
            {
                productos.productos.products !== undefined ? productos.productos.products.map((libro, i) => {
                    let autor = autores.autores.filter(autor => autor.id === libro.autor_fk )
                    let genero = generos.generos.filter(genero => genero.id === libro.genero_fk )
                    let link = "https://libreria-hedwig.herokuapp.com/products/detalles/" + libro.id
                    return (
                        <tr key={i}>
                        <th scope="row">{libro.id}</th>
                        <td><a href="libro.imagen"><img src={libro.imagen} alt="libro" width="100"></img></a></td>
                        <td>{libro.titulo}</td>
                        <td>{libro.valoracion}</td>
                        <td>{libro.oferta}%</td>
                        <td>{libro.compras}</td>
                        <td>{libro.editorial}</td>
                        <td>{autor[0].nombre}</td>
                        <td>{genero[0].nombre}</td>
                        <td><a target="_blank" rel="noreferrer" href={link}>Visitar</a></td>
                        </tr> 
                    )
                }) : console.log("f")
            }
        </tbody>
    </table>
    )
}

export default Products
