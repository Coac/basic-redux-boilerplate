import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.props.actions.increment();
  }

  decrement() {
    this.props.actions.decrement();
  }

  render() {
    return (
      <div>
        <button onClick = { this.decrement }> - </button>
        <p>{this.props.counter}</p>
        <button onClick = { this.increment }> + </button>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Counter;
