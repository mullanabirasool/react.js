import React, { Component } from 'react';

class Classf extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
  }

  // Handlers
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement} style={{ marginLeft: '10px' }}>Decrement</button>
        <button onClick={this.handleReset} style={{ marginLeft: '10px' }}>Reset</button>
      </div>
    );
  }
}

export default Classf;
