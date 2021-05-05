import Menu from "./pages/Menu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">Login</Route>
        <Route path="/menu">
          <div>
            <Menu />
          </div>
        </Route>
        <Route path="/">Home</Route>
      </Switch>
    </Router>
  );
}

export default App;
