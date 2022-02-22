import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contacts/contactsReduser';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
      },
})


console.log("store :>> ", store);

export default store;