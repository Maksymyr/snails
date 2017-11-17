import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function saleBooks(state = InitialState.saleBooks, action) {
    let {type, payload} = action;
    return state;
};