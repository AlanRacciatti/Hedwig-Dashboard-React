import CardInfo from './CardInfo/CardInfo'
import CardCategory from './CardCategory/CardCategory'
import UltimoProducto from './UltimoProducto/UltimoProducto'
import UltimoUsuario from './UltimoUsuario/UltimoUsuario'
import { useState, useEffect } from 'react'

const moneyFormatter = new Intl.NumberFormat('es-AR', {
	style: 'currency',
	currency: 'ARS',
	minimumFractionDigits: 0
});

const ContenidoPagina = () => {

	const [hasError, setErrors] = useState(false);
	const [usuarios, setCantUsuarios] = useState({});
	const [productos, setCantProductos] = useState({})
	const [categorias, setCategorias] = useState({categorias: [1, 2]})
	const [ultimoProducto, setUltimoProducto] = useState({})
	const [ultimoUsuario, setUltimoUsuario] = useState({})
	const [montoFinal, setMontoFinal] = useState({})

	useEffect(() => {

		fetch("https://libreria-hedwig.herokuapp.com/users/api/v1/ultimoUsuario")
		.then(res => res.json())
		.then(res => { setUltimoUsuario({ ultimoUsuario: res }) })

	}, [] )

	console.log(ultimoUsuario.ultimoUsuario)

	useEffect(() => {

		fetch("https://libreria-hedwig.herokuapp.com/products/api/v1/ultimoProducto")
		.then(res => res.json())
		.then(res => { setUltimoProducto({ ultimoProducto: res }) })

	}, [] )

	useEffect(() => {

		fetch("https://libreria-hedwig.herokuapp.com/users/api/v1/info")
		.then(res => res.json())
		.then(res => { setCantUsuarios({ cantUsuarios: res.count.cantidadUsuarios}) })
		.catch(() => setErrors({ hasError: true }))

	}, [] );

	useEffect(() => {

		fetch("https://libreria-hedwig.herokuapp.com/products/api/v1/info")
		.then(res => res.json())
		.then(res => { 

			// Cantidad productos
			setCantProductos({ cantProductos: res.count })

			//Monto productos
			let montoProductos = 0
			res.products.forEach(product => {montoProductos += product.precio * product.stock})
			setMontoFinal({ montoFinal: moneyFormatter.format(montoProductos) })

			//Categorias
			let arrayLibros = []
			let categoriasLibros = []

			res.countByCategory.forEach(categoria => {
				arrayLibros.push(categoria[1])
			})

			arrayLibros.sort((a, b) => a - b).reverse().splice(6, arrayLibros.length - 5)

			arrayLibros.forEach(number => {
				res.countByCategory.forEach(category => {
					if (category[1] === number && categoriasLibros.length < 6) {
						if (categoriasLibros.indexOf(category) === -1) {
							categoriasLibros.push(category)
						}
					}
				})
			})

			setCategorias({ categorias: categoriasLibros })

		})
		.catch(() => setErrors({ hasError: true }))

	}, [] )

    return (
		<div className="container-fluid">

			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">Hedwig Dashboard</h1>
			</div>

			<div className="row">

				<CardInfo 
					border = "border-left-primary"
					color = "text-primary"
					name = "Productos totales"
					value = {productos.cantProductos}
					icon = "fas fa-shopping-basket"
				/>
				

				<CardInfo 
					border = "border-left-success"
					color = "text-success"
					name = "Monto en productos"
					value = {montoFinal.montoFinal}
					icon = "fas fa-dollar-sign"
				/>

				<CardInfo
					border = "border-left-warning"
					color = "text-warning"
					name = "Cantidad de usuarios"
					value = {usuarios.cantUsuarios}
					icon = "fas fa-user"
				/>
			
			</div>

			<div className="row">
				{
					ultimoProducto.ultimoProducto &&
					<UltimoProducto 
						ultimoProducto = {ultimoProducto}
					/>
				}
				
				{
					ultimoUsuario.ultimoUsuario &&
					<UltimoUsuario
						ultimoUsuario = {ultimoUsuario}
					/>
				} 

				<div className="col-lg-6 mb-4">						
					<div className="card shadow mb-4 bg-hedwig">
					<div className="card-header py-3 bg-hedwig">
						<h6 className="m-0 font-weight-bold text-white bg-hedwig">Categorias principales</h6>
					</div>
					<div className="card-body">
						<div className="row">
							{ categorias && categorias.categorias.map((categoria, i) => {
								return (
									<CardCategory
										key = {i} 
										categoria = {categoria[0]}
										cantidad = {categoria[1]}
									/>
								)
							}) }
							
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
    )
}

export default ContenidoPagina