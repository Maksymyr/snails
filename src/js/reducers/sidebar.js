import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function sidebar(state = InitialState.sidebar, action) {
    let {type, payload} = action;

    switch(type) {
        case types.SIDEBAR_HIDE:
            return payload;
        default:
            return state;
    }
};