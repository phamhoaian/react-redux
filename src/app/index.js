import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      homeMounted: false
    }
  }
  onGreat() {
    alert('Great!');
  }
  onChangeMount() {
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }
  render() {
    var user = {
      name: "Anna",
      hobbies: ["Sports", "Music"]
    };
    var homeCmp = '';
    if (this.state.homeMounted) {
      homeCmp = (
        <Home name={"Pham An"} age={27} user={user} great={this.onGreat}/>
      );
    }
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-10 col-sm-offset-1">
            <Header homeLink="Home" />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-sm-10 col-sm-offset-1">
            {homeCmp}
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-sm-10 col-sm-offset-1">
            <button className="btn btn-primary" onClick={this.onChangeMount.bind(this)}>(Un)Mount Home Component</button>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));