import React from 'react'

function CardCategory(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <span className="font-weight-bold"> {props.categoria}: {props.cantidad} libros </span>
                    <i className="fas fa-book fa-2x text-hedwig-ter"></i>
                </div>
            </div>
        </div>
    )
}

export default CardCategory
