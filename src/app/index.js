import React from "react";
import { render } from "react-dom";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
class App extends React.Component {
  render() {
    return (
      <Root>
        <Home name={"Pham An"} age={27}/>
      </Root>
    );
  }
}

render(<App/>, document.getElementById('app'));