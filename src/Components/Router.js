import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserResume from "./UserResume/UserResume";
import App from "./App/App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/company/:nombreDeLaEmpresa" component={UserResume} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;