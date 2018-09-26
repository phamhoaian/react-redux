import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pham An",
      age: 27,
      status: 0,
      user: {
        name: "Anna",
        hobbies: ["Sports", "Music"]
      }
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 3000);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('component will mount');
  }

  componentDidMount() {
    console.log('component did mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('component will receive props', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('compoent will update', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update', prevProps, prevState);
  }

  onMakeOlder() {
    this.setState({age: this.state.age + 1})
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
    return (
      <div>
        <br/>
        <p>In a new component!</p>
        <p>Your name is {this.state.name}, your age is {this.state.age}</p>
        <p>User Object => Name: {this.state.user.name}</p>
        <p>State: {this.state.status}</p>
        <div>
          <h4>Hobbies:</h4>
          <ul>
            {this.state.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
          </ul>
        </div>
        <hr/>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
        <hr/>
        <button onClick={this.onGreat} className="btn btn-success">Great</button>
        <hr/>
        <button className="btn btn-primary" onClick={this.onChangeMount.bind(this)}>(Un)Mount Home Component</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  great: PropTypes.func
}