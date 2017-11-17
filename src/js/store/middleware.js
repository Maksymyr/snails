import * as types from '../constants/ActionTypes'

const middleware = store => next => action => {
    next(action);
    if(action.type == types.BOUGHT_BOOK) {
        localStorage.setItem("Bought", JSON.stringify(store.getState().bought))
    }
    if(action.type == types.ADD_BASKET){
        localStorage.setItem("Basket", JSON.stringify(store.getState().inbasket))
    }
    if(action.type == types.DEL_FROM_BASKET){
        localStorage.setItem("Basket", JSON.stringify(store.getState().inbasket))
    }
    if(action.type == types.DEL_ALL_BASKET){
        localStorage.setItem("Basket",null)
    }
    if(action.type == types.RATE) {
        
    }
    return;
}
export default middleware;