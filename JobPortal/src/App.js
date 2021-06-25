
import './App.css';
import Home from './Page/Home/Home';
import SearchDetail from '../src/Widget/Detail/SearchDetail.js'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import RelatedJobsDetail from './Widget/RelatedJobsDetail/RelatedJobsDetail';
import AdvanceSearch from './Widget/AdvanceSearch/AdvanceSearch';






function App() {
  return (
    <div>
        
      <Router>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/search_detail' component={SearchDetail}/>
          <Route path='/related_search_detail' component={RelatedJobsDetail}/>
          <Route path='/advance_search' component={AdvanceSearch}/>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
