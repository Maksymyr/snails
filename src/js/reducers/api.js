import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function category(state = [], action) {
    let {type, payload} = action;

    switch(type) {
        case("FETCH_DATA"):
        return [...state, ...payload];
        default:
            return state;
    }
};