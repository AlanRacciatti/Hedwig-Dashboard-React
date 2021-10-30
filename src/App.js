import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import PageContent from './components/PageContent/PageContent'
import Products from './components/Products/Products'
import Charts from './components/Charts/Charts'

import {Route, Switch} from 'react-router-dom'
import './app.css';
import './index.css'

const App = () => {
  return(
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
          <Switch>
            <Route path="/" component={PageContent} exact={true} />
            <Route path="/products" component={Products} exact={true} />
            <Route path="/charts" component={Charts} exact={true} />
            <Route component={PageContent} />
          </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App