import About from './About';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Router path="/">
          <Home/>
        </Router>
        <Router path="/about">
          <About/>
        </Router>
      </Switch>
    </div>

    </Router>
  
  );
}

export default App;
