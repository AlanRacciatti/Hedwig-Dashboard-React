import React from 'react'

const UltimoUsuario = (props) => {
    let rutaImagen = props.ultimoUsuario.ultimoUsuario[0].imagen
    return (
        <div className="col-lg-3 mb-4 text-center">
            <div className="card shadow mb-4 bg-hedwig text-center h-100">
                <div className="card-header py-3 bg-hedwig">
                    <h6 className="m-0 font-weight-bold text-white">Último usuario agregado</h6>
                </div>
                <div className="card-body text-center">
                    <div className="px-3 text-center">
                        <div className="col-lg-12 mb-4 bg-hedwig text-center">
                            <h4 className="text-center text-white">{props.ultimoUsuario.ultimoUsuario[0].nombre}</h4>
                            <img className="text-center d-block m-auto book-dashboard border-hedwig" src={rutaImagen} width="200" alt="libro" />
                            <h6 className="text-center my-2 text-white">{props.ultimoUsuario.ultimoUsuario[0].email}</h6>
                            <div>
                                <p className="text-white text-center">Este es el último usuario que se añadió a la base de datos de Hedwig.</p>
                                <a className="text-center d-block" href={rutaImagen} id="userDropdown">
                                    <button className="btn btn-primary border-0 bg-hedwig-sec">Detalles del usuario <i className="fas fa-user"></i></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UltimoUsuario
