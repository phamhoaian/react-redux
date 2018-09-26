import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
class App extends React.Component {
  onGreat() {
    alert('Great!');
  }
  render() {
    var user = {
      name: "Anna",
      hobbies: ["Sports", "Music"]
    };
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-10 col-sm-offset-1">
            <Header homeLink="Home" />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-sm-10 col-sm-offset-1">
            <Home name={"Pham An"} age={27} user={user} great={this.onGreat}/>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));