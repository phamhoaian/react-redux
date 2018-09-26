import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'; 

import { Root } from "./components/Root";
import { User } from "./components/User";
import { Error404 } from "./components/Error404";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Root}/>
          <Route path="/user" component={User}/>
          <Route component={Error404}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));