import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

const Charts = () => {

    const [autores, setAutores] = useState({})
    const [libros, setLibros] = useState({})

    useEffect(() => {

        fetch("https://libreria-hedwig.herokuapp.com/products/api/v1/topAutores")
        .then(res => res.json())
        .then(res => setAutores({ autores: res }))

        fetch("https://libreria-hedwig.herokuapp.com/products/api/v1/topLibros")
        .then(res => res.json())
        .then(res => setLibros({ libros: res }))

    }, [])

    console.log(libros)


    const labelsAutores = []
    const labelsLibros = []
    const dataGraficoAutores = []
    const dataGraficoLibros = []

    if (autores.autores !== undefined && libros.libros !== undefined) {

        autores.autores.forEach(autor => {
            labelsAutores.push(autor[0])
            dataGraficoAutores.push(autor[1])
        })

        libros.libros.forEach(libro => {
            labelsLibros.push(libro.titulo)
            dataGraficoLibros.push(libro.compras)
        })
    }

    const dataAutores = {
        labels: labelsAutores,
        datasets: [
          {
            label: 'Cantidad de ventas',
            data: dataGraficoAutores,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    const dataLibros = {
        labels: labelsLibros,
        datasets: [
          {
            label: 'Cantidad de ventas',
            data: dataGraficoLibros,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
    const options = {
    scales: {
        yAxes: [
        {
            ticks: {
            beginAtZero: true,
            },
        },
        ],
    },
    };

    return (
        <div className="row">
            <div className="col-lg-6">
                <h2  className="text-center">Top autores con más ventas</h2>
                <Bar
                    data={dataAutores}
                    options={options}
                />
            </div>
            <div className="col-lg-6">
                <h2 className="text-center">Top libros con más ventas</h2>
                <Bar
                    data={dataLibros}
                    options={options}
                />
            </div>
        </div>
    )
}

export default Charts

