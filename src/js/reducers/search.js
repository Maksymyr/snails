import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function search(state = InitialState.search, action) {
    let {type, payload} = action;

    switch(type) {
    case(types.SEARCH):
        return payload;
    default:
        return state;
    }
};