import * as types from '../constants/ActionTypes';

export const futureBook = (payload) => ({type: types.FEATURUDE_BOOK, payload}); 
export const delfrombasket = (payload) => ({type: types.DEL_FROM_BASKET, payload});
export const searchBook = (payload) => ({type: types.SEARCH, payload});
export const addBasket = (payload) => ({type: types.ADD_BASKET, payload});
export const filterBooks = (payload) => ({type: types.FILTER, payload});
export const sideBarHide = (payload) => ({type: types.SIDEBAR_HIDE, payload});
export const addBook = (payload) => ({type: types.ADD_BOOK, payload});
export const addCategory = (payload) => ({type: types.ADD_CATEGORY, payload});
export const addComment = (payload) => ({type: types.ADD_COMMENT, payload});
export const likePost = (payload) => ({type: types.LIKE, payload});
export const delallbasket = (payload) => ({type: types.DEL_ALL_BASKET, payload});
export const addNotify = (payload) => ({type: types.ADD_NOTIFY, payload});
export const fetchData = (payload) => ({ type: types.FETCH_DATA, payload });
export const apiData = (payload) => ({type: types.API_DATA, payload});
export const rateBook = (payload) => ({type: types.RATE, payload});
export const boughtBook = (payload) => ({type: types.BOUGHT_BOOK, payload});
export const addWatchedBooks = (payload) => ({type: types.ADD_WATCHED_BOOKS, payload})
export const setStick = (payload) => ({type: types.SET_STICK, payload})


