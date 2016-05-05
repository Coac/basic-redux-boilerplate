import expect from 'expect';
import * as actions from '../../src/actions/';
import * as types from '../../src/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to increment', () => {
    const expectedAction = {
      type: types.INCREMENT,
    };
    expect(actions.increment()).toEqual(expectedAction);
  });

  it('should create an action to decrement', () => {
    const expectedAction = {
      type: types.DECREMENT,
    };
    expect(actions.decrement()).toEqual(expectedAction);
  });
});
