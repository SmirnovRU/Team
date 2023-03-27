import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import "./App.css";

import { Router } from "./components/Router/Router";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
