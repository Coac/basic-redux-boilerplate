import expect from 'expect';
import counter from '../../src/reducers';
import * as types from '../../src/constants/ActionTypes';

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(counter(undefined, {})).toEqual({ counter: 0 });
    });

    it('should handle INCREMENT action', () => {
      expect(counter({ counter: 753 }, { type: types.INCREMENT })).toEqual({ counter: 754 });
    });

    it('should handle DECREMENT action', () => {
      expect(counter({ counter: 145 }, { type: types.DECREMENT })).toEqual({ counter: 144 });
    });

    it('should ignore unknown actions', () => {
      expect(counter({ counter: 4 }, { type: 'unknown' })).toEqual({ counter: 4 });
    });
  });
});
