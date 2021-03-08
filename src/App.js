import { Router } from '@reach/router'
import './App.css'
import Navbar from './components/Navbar'
import Component_1 from './views/Component_1'
import Component_2 from './views/Component_2'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Component_1 path="/" />
        <Component_2 path="/component_2" />
      </Router>
    </div>
  );
}

export default App;
