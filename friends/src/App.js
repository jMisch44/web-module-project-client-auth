import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Friend from "./Components/Friend";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import "./App.css";
import FriendsList from "./Components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/logout">
            Logout
          </Link>
        </header>
        <Switch>
          <PrivateRoute exact path="/friends/:id" component={Friend} />
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
