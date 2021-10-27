import logo from './logo.svg';
import './App.css';

import MainCard from "./components/MainDataCards/main-data-card"
import Categoria from "./components/categoriasData/categoria-data"
import Side from "./components/SideBar/side-bar"
import Top from "./components/TopBar/top-bar"
import UltProducto from "./components/UltProducto/ult-producto"


const App = () => {
  return(
    <div>
      <MainCard usuarios/>
      <MainCard arbol/>
      <MainCard/>
    </div>
  )
}
export default App