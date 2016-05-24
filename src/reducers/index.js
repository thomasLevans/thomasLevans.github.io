import d3 from 'd3';

const initialState = {
  skills: {
    name: '',
    children: []
  }
};
const part = d3.layout.partition()
  .sort(null)
  .size([Math.PI * 2, Math.pow(250, 2)])
  .value(d => 1);

import {
  SET_PARTITION
} from '../actions';

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PARTITION:
      return {
        skills: part.nodes(state.skills)
      };
    default:
      return state;
  }
}
