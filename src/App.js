import Home from './Home';
import Navbar from './Navbar'; // import another component
function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Navbar/>
      <div className="container">
      <Home/>
      </div>

 
      </div>
    </div>
  );
}

export default App;
