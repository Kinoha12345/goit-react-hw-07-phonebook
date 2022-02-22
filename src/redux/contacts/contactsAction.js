import { createAction } from "@reduxjs/toolkit";

// export const addContact = (contact) => ({
//     type: "contacts/add", 
//     payload: contact,
// })

// export const removeName = (name) => ({
//     type: "contacts/remove",
//     payload: name,
// })

// export const filterValue = (value) => ({
//     type: "contacts/filter",
//     payload: value,
// })

export const addContact = createAction("contacts/add");
export const removeName = createAction("contacts/remove");
export const filterValue = createAction("contacts/filter");

