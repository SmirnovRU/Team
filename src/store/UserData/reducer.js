import { ADD_USERS_DATA, DELETE_USERS_DATA } from "./type";

const initialState = [];

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS_DATA:
      return [...state, ...action.payload];

    case DELETE_USERS_DATA:
      return [];

    default:
      return state;
  }
};
