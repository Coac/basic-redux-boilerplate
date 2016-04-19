import React, { PropTypes } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import * as counterActions from '../actions';
import { bindActionCreators } from 'redux';

function CounterContainer({ counter, actions }) {
  return (
    <Counter counter={counter} actions={actions} />
  );
}

CounterContainer.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(counterActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
