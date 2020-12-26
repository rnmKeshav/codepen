import React from "react";
import Main from "./components/Main";

const App = () => {

  console.log("Hi from app")
  return (
    <div>Hi i am app

      <div id="hidden"></div>
      <Main />
    </div>
  );
}

export default App;
