
import './App.css';
import Home from './Page/Home/Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';





function App() {
  return (
    <div>
        
      <Router>

        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
