import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Services from "./components/Services";
import Sports from "./components/Sports";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="f-heading">
        <h1>Sports</h1>
        <p>Know about sports and its importance</p>
      </div>
      <Sports/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
