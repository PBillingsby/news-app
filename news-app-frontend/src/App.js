import React from "react";
import "./App.css";

import NewsApi from "./NewsApi";

function App() {
  return (
    <div className="App">
      <h1>News App</h1>
      <NewsApi />
    </div>
  );
}

export default App;
