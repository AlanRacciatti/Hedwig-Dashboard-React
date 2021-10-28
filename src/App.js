import {useState, useEffect, useRef} from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import MainCard from './components/MainDataCards/main-data-card'
import './app.css';

const App = () => {
  const [hasError, setErrors] = useState(false);
    const [usuarios, setCantUsuarios] = useState({});
      
      
    useEffect(() =>
    fetch("http://localhost:3001/users/api/v1/info")

      .then(res => res.json())
      .then(res => setCantUsuarios({ cantUsuarios: res.cantUsuarios.count}))
      .catch(() => setErrors({ hasErrors: true }))
    , []);
    console.log(usuarios);
    
  return(
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
        </div>
      </div>
      <p>{usuarios.cantUsuarios}</p>
      <MainCard>
        
      </MainCard>
    </div>
  )
}
export default App