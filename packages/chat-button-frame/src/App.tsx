import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
import { ChatButton } from './components';


function App() {

  const browserHistory = createBrowserHistory();
  
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path="/:color" component={ChatButton}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
