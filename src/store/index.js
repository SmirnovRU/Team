import { combineReducers, createStore } from "redux";
import { dataReducer } from "./UserData/reducer";
import { tokenReducer } from "./Token/reducer";

const rootReducer = combineReducers({
  data: dataReducer,
  token: tokenReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
