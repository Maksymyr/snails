import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function inbasket(state = InitialState.inbasket, action) {
    let {type, payload} = action;

    switch(type) {
        case (types.DEL_FROM_BASKET):
            return state.filter((item, index)=>{return index!=payload});
        case types.ADD_BASKET:
            return [...state, payload]
        case types.DEL_ALL_BASKET:
            return []
        default:
            return state;
    }
};