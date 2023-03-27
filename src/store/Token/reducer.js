import { ADD_USER_TOKEN, DELETE_USER_TOKEN } from "./type";

const initialState = "";

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_TOKEN:
      return action.payload;
    case DELETE_USER_TOKEN:
      return "";

    default:
      return state;
  }
};
