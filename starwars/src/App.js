// import React from 'react';
import Character from "./components/Character";

import React, { useState } from "react";
import { Collapse, Button } from "reactstrap";

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        backgroundColor: "#2a222352",
        margin: "20px",
        borderRadius: "10px",
      }}
      className="App"
    >
      <h1>
        <Button
          color="primary"
          onClick={toggle}
          style={{ fontSize: "35px", margin: "5vh" }}
        >
          *Rick & Morty*
          

        </Button>
        <p style={{ color:'black'}}>ReactJS Sprint #1</p>
      </h1>
      <Collapse isOpen={isOpen}>
        <Character />
      </Collapse>
    </div>
  );
};

export default App;
