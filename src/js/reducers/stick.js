import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function sidebar(state = InitialState.stick, action) {
    let {type, payload} = action;

    switch(type) {
        case types.SET_STICK:
            return payload;
        default:
            return state;
    }
};