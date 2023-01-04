import "./App.css";
import React from "react";
import App1 from "./Redux/App1";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <App1 />
      </Provider>
    </div>
  );
}

export default App;
