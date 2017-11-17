import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function filter(state = InitialState.filter, action) {
    let {type, payload} = action;
    
  

    switch(type) {
        case(types.FILTER):
            return payload;
        default:
            return state;
    }
};