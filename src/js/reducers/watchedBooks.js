import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function watchedBooks(state = InitialState.watchedBooks, action) {
    let {type, payload} = action;

    switch(type) {
    case types.ADD_WATCHED_BOOKS:
                if(state.find((item, index) => item==payload)) {return state}
                else return [...state, payload]
    default:
        return state;
    }
};