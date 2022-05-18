import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestOne from './page/TestOne';
import TestTwo from './page/TestTwo';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TestOne />
        </Route>
        <Route path="/newfeed">
          <TestTwo />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
