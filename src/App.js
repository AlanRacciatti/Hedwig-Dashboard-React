import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import PageContent from './components/PageContent/PageContent'
import './app.css';
import './index.css'

const App = () => {
  return(
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <PageContent />
        </div>
      </div>
    </div>
  )
}
export default App