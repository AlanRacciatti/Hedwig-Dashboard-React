import React from 'react'

const UltimoProducto = (props) => {
    let rutaImagen = props.ultimoProducto.ultimoProducto[0].imagen
    let rutaProducto = "https://libreria-hedwig.herokuapp.com/products/detalles/" + props.ultimoProducto.ultimoProducto[0].id
    return (
        <div className="col-lg-3 mb-4 text-center">
            <div className="card shadow mb-4 bg-hedwig text-center h-100">
                <div className="card-header py-3 bg-hedwig">
                    <h6 className="m-0 font-weight-bold text-white">Último producto agregado</h6>
                </div>
                <div className="card-body text-center">
                    <div className="px-3 text-center">
                        <div className="col-lg-12 mb-4 bg-hedwig text-center">
                            <h4 className="text-center text-white">{props.ultimoProducto.ultimoProducto[0].titulo}</h4>
                            <img className="text-center d-block m-auto book-dashboard border-hedwig" src={rutaImagen} width="200" alt="libro" />
                            <h4 className="mt-4 text-center text-white">$ {props.ultimoProducto.ultimoProducto[0].precio}</h4>
                            <div>
                                <p className="text-white text-center">Este es el último producto que se añadió a la base de datos de Hedwig.</p>
                                <a className="text-center d-block" href={rutaProducto} id="userDropdown">
                                    <button className="btn btn-primary border-0 bg-hedwig-sec">Detalles del producto <i className="fas fa-info-circle"></i></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default UltimoProducto
