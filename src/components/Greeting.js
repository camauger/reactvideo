import React from "react";

class Greeting extends React.Component {
  render() {
    return <p>Hi there, {this.props.firstName}!</p>;
  }
}

Greeting.defaultProps = { firstName: "Christian" };

export default Greeting;
