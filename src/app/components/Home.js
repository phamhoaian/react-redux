import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
      status: 0
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 3000);
  }

  onMakeOlder() {
    this.setState({age: this.state.age + 1})
  }

  render() {
    return (
      <div>
        <br/>
        <p>In a new component!</p>
        <p>Your name is {this.props.name}, your age is {this.state.age}</p>
        <p>User Object => Name: {this.props.user.name}</p>
        <p>State: {this.state.status}</p>
        <div>
          <h4>Hobbies:</h4>
          <ul>
            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
          </ul>
        </div>
        <hr/>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
        <hr/>
        <button onClick={this.props.great} className="btn btn-success">Great</button>
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