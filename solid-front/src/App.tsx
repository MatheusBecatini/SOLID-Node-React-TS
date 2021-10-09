import React from "react";
import { Provider } from "react-redux";
import UsersComponent from "./components/UsersComponent";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersComponent />
      </div>
    </Provider>
  );
}

export default App;
