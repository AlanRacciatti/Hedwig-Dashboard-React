const Topbar = () => {
    return(

    <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow">

        <ul className="navbar-nav ml-auto">

            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="https://libreria-hedwig.herokuapp.com" id="userDropdown">
                    <button className="btn btn-primary border-0 bg-hedwig-sec">Volver a hedwig</button>
                </a>
            </li>

        </ul>

    </nav>
    )
}

export default Topbar