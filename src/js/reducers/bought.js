import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function bought(state = InitialState.bought, action) {
    let {type, payload} = action;
    switch(type) {
        case types.BOUGHT_BOOK:
        if  (state.length > 0) {
            return [...state, ...payload.filter((item, index)=> {
                if(state.map((item2, index2)=> item.code!=item2.code).includes(false)) {}
                else return item
            })]
        }
        else
            return payload;
        default:
            return state;
    }
};

