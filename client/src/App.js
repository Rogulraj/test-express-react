import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import { useState } from "react";

function App() {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  console.log(id, name, password);

  const getData = async () => {
    const url = "/api/get/user/details";
    const response = await fetch(url);

    if (response.ok) {
      const fet = await response.json();
      console.log(fet);
    }
  };

  const addDetails = async () => {
    const url = "/api/post/add/user/details";
    const userDetails = { id, name, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    const postResponse = await fetch(url, options);
    if (postResponse.ok) {
      const response = await postResponse.json();
      console.log(response);
    } else {
      console.log(postResponse);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="number" onChange={(event) => setId(event.target.value)} />
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <input
          type="text"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="btn-card">
          <button className="button-style" onClick={getData}>
            get
          </button>
          <button className="button-style" onClick={addDetails}>
            post
          </button>
          <button className="button-style">insert</button>
          <button className="button-style">update</button>
        </div>
      </header>
    </div>
  );
}

export default App;
