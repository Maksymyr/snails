import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function notify(state = InitialState.notify, action) {
    let {type, payload} = action;

    switch(type) {
    case(types.ADD_NOTIFY):
        return payload;
    default:
        return state;
    }
};