import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className="App">
          <Sidebar/>
            <div className="main-content">
                <Switch>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                  <Route exact path="/about">
                    <About/>
                  </Route>
                  <Route>
                    <Redirect to="/"/>
                  </Route>
                </Switch>
              </div>
        </div>
    </Router>
    
  );
}

export default App;
