import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import { Footer, Header } from "./components";
import { DashboardPage, LoginPage, MainPage } from "./pages";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("portfolio-admin-token"))
          return <Component {...props} />;
        return (
          <Redirect
            to={{
              pathname: "/admin-login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/admin-login" component={LoginPage} />
          <ProtectedRoute
            exact
            path="/admin-dashboard"
            component={DashboardPage}
          />
          <Route path="/" component={MainPage} />
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
