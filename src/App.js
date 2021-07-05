import './App.css';
import HomePage from './pages/HomePage';
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
