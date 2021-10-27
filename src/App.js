import logo from './logo.svg';
import './App.css';

import MainCard from "./components/main-data-card"


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