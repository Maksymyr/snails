import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function category(state = InitialState.category, action) {
    let {type, payload} = action;

    switch(type) {
        case types.ADD_CATEGORY:
        return [...state, payload]
        default:
            return state;
    }
};