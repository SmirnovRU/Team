import { ADD_USER_TOKEN, DELETE_USER_TOKEN } from "./type";

export const addUserToken = (data) => ({
  type: ADD_USER_TOKEN,
  payload: data,
});

export const deleteUserToken = () => ({
  type: DELETE_USER_TOKEN,
});
