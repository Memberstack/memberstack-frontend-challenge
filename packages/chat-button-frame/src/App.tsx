import './App.css';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
import { ChatButton } from './components';


function App() {

  const browserHistory = createBrowserHistory();
  
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Switch>
          <Route path="/:color" component={ChatButton}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
