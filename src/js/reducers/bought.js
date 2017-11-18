import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function bought(state = InitialState.bought, action) {
    let {type, payload} = action;
    switch(type) {
        case types.BOUGHT_BOOK:
        for (var read=1, write=1; read<payload.length; ++read) {
            if (payload[read] !== payload[read-1]) {
              payload[write++] = payload[read];
            }
          }
          payload.length = write;
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

