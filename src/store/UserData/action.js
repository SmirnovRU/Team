import { ADD_USERS_DATA, DELETE_USERS_DATA } from "./type";

export const usersDataLists = (data) => ({
  type: ADD_USERS_DATA,
  payload: data,
});

export const usersDataDelete = () => ({
  type: DELETE_USERS_DATA,
});
