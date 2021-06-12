
import './App.css';
import Home from './Page/Home/Home';
import SearchDetail from '../src/Widget/Detail/SearchDetail.js'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';





function App() {
  return (
    <div>
        
      <Router>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/search_detail' component={SearchDetail}/>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
