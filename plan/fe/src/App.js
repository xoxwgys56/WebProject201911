import React, { useState, Fragment } from "react";
import "./App.css";
import "./swiper.css";

// import Login from "./components/Login.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Profile from "./components/Profile.js";
import LogoutButton from "./components/LogoutButton.js";
import LoginForm from "./components/LoginForm.js";
import AuthRoute from "./components/AuthRoute.js";
import { signIn } from "./components/auth.js";
import NotFound from "./components/NotFound.js";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/pages/Main";
import Login from './components/pages/Login';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <Router>
      {/* <Login></Login> */}
      {/* <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        {authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </header> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
      {/* <hr />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/login"
            render={props => (
              <LoginForm
                authenticated={authenticated}
                login={login}
                {...props}
              />
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => <Profile user={user} {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </main> */}
    </Router>
  );
}

export default App;
