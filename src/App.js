import About from './About';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Home from './Home';
import Blogs from './Blogs';
import Create from './Create';
import BlogDetail from './BlogDetail';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route path="/blogs">
        <Blogs/>
        </Route>
        <Route exact path="/blog/:id">
          <BlogDetail/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
       
      </Switch>
    </div>

    </Router>
  
  );
}

export default App;
