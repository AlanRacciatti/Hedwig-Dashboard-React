import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import './app.css';

const App = () => {
  return(
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
        </div>
      </div>
    </div>
  )
}
export default App