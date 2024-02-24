import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useCustomHook } from "peaks.js-react";

function App() {
  const { data, loading, error } = useCustomHook();

  return (
    <div className="App">
      <h1>Demo for peaks.js-react</h1>
      {!!loading && <p>Loading</p>}
      {!!error && <p>Error: {JSON.stringify(error)}</p>}
      {!error && !loading && !!data && <p>{data}</p>}
    </div>
  );
}

export default App;
