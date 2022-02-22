// import {combineReducers} from 'redux';
import {combineReducers, createReducer } from "@reduxjs/toolkit";
import {addContact, removeName, filterValue} from './contactsAction';

// const itemsReducer = (state = [], { type, payload }) =>  {
//     switch (type) {
//         case "contacts/add":
//             return [...state, payload];
//         case "contacts/remove":
//             return state = state.filter((el) => el.name.toLowerCase() !== payload.toLowerCase());
//         default:
//             return state;
//     }
// }

// const filterReducer = (state = '', { type, payload }) => {
//     switch (type) {
//         case "contacts/filter":
//             return state = payload;
//         default: 
//         return state;
//     }
// }

const itemsReducer = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [removeName]: (state, action) => state.filter((el) => el.name.toLowerCase() !== action.payload.toLowerCase())
})

const filterReducer = createReducer('', {
    [filterValue]: (_, action) => action.payload
})

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
});

export default contactsReducer;