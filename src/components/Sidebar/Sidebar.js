import {Link} from 'react-router-dom'
import {useRef} from 'react'

const Sidebar = () => {

	const navItem1 = useRef();
	const navItem2 = useRef();
	const navItem3 = useRef();

	const activeNavItem1 = () => {
		navItem1.current.className = navItem2.current.className + " active"
		navItem2.current.className = "nav-item"
		navItem3.current.className = "nav-item"
	}

	const activeNavItem2 = () => {
		navItem2.current.className = navItem2.current.className + " active"
		navItem1.current.className = "nav-item"
		navItem3.current.className = "nav-item"
	}

	const activeNavItem3 = () => {
		navItem3.current.className = navItem2.current.className + " active"
		navItem1.current.className = "nav-item"
		navItem2.current.className = "nav-item"
	}

    return(

    <ul className="navbar-nav bg-gradient-primary bg-hedwig-sec sidebar sidebar-dark accordion" id="accordionSidebar">

			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img src="https://res.cloudinary.com/libreria-hedwig/image/upload/v1635375343/Logo-error_a30e6l.png" alt="logo" width="50" />
				</div>
				<div className="sidebar-brand-text mx-3">Hedwig</div>
			</a>

			<hr className="sidebar-divider my-0" />

			<li ref={navItem1} className="nav-item active">
				<Link onClick={activeNavItem1} className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span>
				</Link>
			</li>

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">Secciones</div>

			<li ref={navItem2} className="nav-item">
				<Link onClick={activeNavItem2} className="nav-link" to="/charts">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Charts</span>
				</Link>
			</li>

            <li ref={navItem3} className="nav-item">
				<Link onClick={activeNavItem3} className="nav-link" to="/products">
					<i className="fas fa-fw fa-table"></i>
					<span>Productos</span>
				</Link>
			</li>

			<li className="nav-item">
				<a target="_blank" rel="noreferrer" className="nav-link collapsed" href="https://app.swaggerhub.com/apis/AlanRacciatti/Hedwig-api/1.0.0">
					<i className="fas fa-file-alt"></i>
					<span>Api docs</span>
				</a>
			</li>

			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
    )
}

export default Sidebar