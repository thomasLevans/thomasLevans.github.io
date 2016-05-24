import { expect } from 'chai';

import reducer from '../../src/reducers';


import {
  SET_PARTITION
} from '../../src/actions';

describe('root reducer', () => {

  it('has default initialState', () => {
    const initialState = {
      skills: {
        name: '',
        children: []
      }
    };

    expect(reducer(undefined, { type:'INVALID' })).to.deep.equal(initialState);
  });

  it('handles SET_PARTITION on skills', () => {
    const initialState = {
      skills: {
        name: 'Test',
        children: []
      }
    };
    const action = {
      type: SET_PARTITION
    };

    const root = reducer(initialState, action).skills[0];

    expect(root).to.have.property('value');
    expect(root).to.have.property('depth');
    expect(root).to.have.property('x');
    expect(root).to.have.property('y');
    expect(root).to.have.property('dx');
    expect(root).to.have.property('dy');
  });

});
