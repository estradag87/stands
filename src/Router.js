import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserResume from "./Components/UserResume/UserResume";
import App from "./Components/App/App";
import NotFound from "./Components/NotFound";
import Chart from "./Components/Chart/Chart";
import { Provider } from "react-redux";
import store from "./store";

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/company/:nombreDeLaEmpresa" component={UserResume} />
        <Route path="/a" component={Chart} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Router;
