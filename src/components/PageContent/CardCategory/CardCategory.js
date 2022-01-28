import React from 'react'

function CardCategory(props) {
    let rutaBusqueda = "https://libreriahedwig.herokuapp.com/products/genero/?categoria=" + props.categoria + "&id=" + props.id
    return (
        <a target="_blank" rel="noreferrer" href={rutaBusqueda} className="col-lg-6 mb-4 link-hedwig">
            <div className="card shadow">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <span className="font-weight-bold"> {props.categoria}: {props.cantidad} libros </span>
                    <i className="fas fa-book fa-2x text-hedwig-ter"></i>
                </div>
            </div>
        </a>
    )
}

export default CardCategory
